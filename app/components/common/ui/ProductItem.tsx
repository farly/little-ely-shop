import Image from 'next/image'
import Text from './Text'
import { toCurrency } from '@/app/helpers/numbers'
import { Product } from '../models/Product'
import clsx from 'clsx'

type DiscountedPrice = {
  discountedPrice: number
}

type Props = {
  product: Product & DiscountedPrice
  onClick?: () => void
}

const ProductItem = ({
  product,
  onClick
}: Props) => {

  const classes = clsx("my-6 flex flex-col gap-2 overflow-hidden bg-white", {
    'cursor-pointer': onClick,
  })

  return (
    <div 
      className={classes}
      onClick={onClick}
    >
      <div className="h-auto overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.title}
          className="w-full"
          width={200}
          height={100}
        />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <Text
          as="h5"
          className="flex w-full justify-center font-bold text-[#252B42]"
        >
          {product.title}
        </Text>
        <Text
          as="h5"
          className="flex w-full justify-center font-bold text-[#737373]"
        >
          {product.description}
        </Text>
        <span className="flex justify-center gap-2">
          <Text
            as="h5"
            className="flex  justify-center font-bold text-[#BDBDBD]"
          >
            {toCurrency(product.price)}
          </Text>
          <Text
            as="h5"
            className="flex justify-center font-bold text-[#23856D]"
          >
            {toCurrency(product.discountedPrice)}
          </Text>
        </span>
      </div>
    </div>
  )
}

export default ProductItem
