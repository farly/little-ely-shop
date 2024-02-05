import { useState, useEffect } from 'react'
import useSWR from 'swr'

import ProductList from '@/app/components/common/ui/ProductList'
import Text from '@/app/components/common/ui/Text'
import { Product } from '@/app/components/common/models/Product'
import { isEmpty } from 'lodash'
import { useRouter } from 'next/navigation'

const LIMIT = 20 

type Props = {
  limit?: number
  isLoadMore?: boolean
}

const Products = ({
  limit = LIMIT,
  isLoadMore = true
} : Props) => {
  const [skip, setSkip] = useState<number>(0)
  const [products, setProducts] = useState<Product[]>([])
  const { data } = useSWR(`/products?skip=${skip}&limit=${limit}`)

  const { push } = useRouter() 

  useEffect(() => {
    if(!data) return 
    if(!data.products) return
    if(isEmpty(data.products)) return
    setProducts(p => [...p, ...data.products])
  }, [data])

  const isLast = skip + limit >= data?.total

  const gotoProduct = (id: number) => {
    push(`/products/${id}`)  
  }

  return (
    <section className="mb-4">
      <ProductList products={products} navigate={gotoProduct}/>
      {isLoadMore && 
        <div className="mb-10 flex w-full justify-center">
          <Text
            as="link"
            className="rounded border border-[#22A6F0] p-4 uppercase text-[#23A6F0]"
            onClick={() => !isLast && setSkip((s) => s + LIMIT )}
            isLast={isLast}
          >
            Load more products
          </Text>
        </div>
      }
    </section>
  )
}

export default Products
