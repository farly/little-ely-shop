import Image from 'next/image';
import CartIcon15x15 from '../common/icons/Cart15x15';
import EyeIcon from '../common/icons/Eye';
import Heart15x15 from '../common/icons/Heart15x15';
import StarIcon from '../common/icons/Star';
import Text from '../common/ui/Text';
import ArrowRightIcon from '../common/icons/ArrowRight';
import { toCurrency } from '@/app/helpers/numbers';
import clsx from 'clsx';
import { Product } from '../common/models/Product';

type Props = {
  product: Product
}

const ProductDetails = ({
  product
} : Props) => {

  const { images }  = product

  return (
    <section className="flex flex-col gap-12 md:flex-row">
      <div className="flex w-[-webkit-fill-available] flex-col gap-2">
        <div className="relative w-full">
          <Image
            src={images[0]}
            width={100}
            height={100}
            alt="sample"
            className="w-[-webkit-fill-available]"
          />
          <span className="absolute right-[1rem] top-[15rem]">
            <ArrowRightIcon fill="#FFFFFF" />
          </span>
        </div>
        <div className=" flex gap-2">
          {images.slice(1).map((image, key) => (
            <div key={key}>
              <Image
                src={image}
                width={100}
                height={100}
                alt="sample"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pb  flex w-full flex-col gap-2 ">
        <div className="border-b pb-20">
          <Text as="h3" className="text-[#252B42]">
            {product.title}
          </Text>
          <div className="flex w-full items-center">
            <span className="flex items-center">
              {[...Array(5)].map((_, key) => (
                <StarIcon key={key} fill={(key + 1) < product.rating} />
              ))}
            </span>
            <Text
              as="h6"
              className=" flex items-center font-bold capitalize text-[#737373]"
            >
              10 reviews
            </Text>
          </div>
          <Text as="h1" className="mt-6 text-4xl text-[#252B42]">
            {toCurrency(product.price)}
          </Text>
          <span className="gap-x-2 flex">
            <Text
              as="h6"
              className=" flex items-center font-bold capitalize text-[#737373]"
            >
              Availability :
            </Text>
            <Text
              as="h6"
              className=" flex items-center font-bold capitalize text-[#23A6F0]"
            >
              { product.stock > 0  ? 'In stock' : 'Out of stock'}
            </Text>
          </span>
          <Text as="p" className="mt-6 block text-sm text-[#737373] md:hidden">
            {product.description}
          </Text>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <div className="flex gap-2">
            {[
              'bg-[#23A6F0]',
              'bg-[#2DC071]',
              'bg-[#E77C40]',
              'bg-[#252B42]',
            ].map((c) => (
              <div className={clsx('h-8 w-8 rounded-full', c)} key={c} />
            ))}
          </div>
          <div className="mt-4 flex gap-2 md:mt-[10rem]">
            <Text
              as="link"
              className="= rounded bg-[#23A6F0] p-4 capitalize text-white hover:bg-[#219de5] hover:text-white"
            >
              Select options
            </Text>
            {[Heart15x15, CartIcon15x15, EyeIcon].map((Icon, key) => (
              <div className="relative h-12 w-12 rounded-full shadow cursor-pointer" key={key}>
                <span className="absolute left-[15px] top-[17px]">
                  <Icon fill="#252B42" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails
