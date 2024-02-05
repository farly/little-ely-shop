import { Product } from '../models/Product'
import Item from './ProductItem'

function toItemProps(product: Product) {
  return {
    ...product,
    discountedPrice: product.price * (product.discountPercentage / 100),
  }
}

type Props = {
  products: Product[]
  navigate: (id: number) => void 
}

const ProductList = ({
  products,
  navigate
}: Props) => {
  return (
    <div className="my-12 flex w-full justify-center px-4 md:px-16">
      <div className="grid w-full grid-cols-1 justify-center gap-4 md:grid-cols-5">
        {products.map((item) => (
          <Item product={toItemProps(item)} key={item.id} onClick={() => navigate(item.id)}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList
