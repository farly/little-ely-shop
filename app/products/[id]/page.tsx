'use client'

import Partners from '@/app/components/common/icons/Partners';
import Pagination from '@/app/components/common/ui/Pagination';
import Text from '@/app/components/common/ui/Text';
import ProductDetails from '@/app/components/product/Details';
import Products from '@/app/home/components/Products';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import useSWR from 'swr';

const BREADCRUMB_PAGES = ['Home', 'Shop']

const ProductPage = () => {

  const { id } = useParams()
  const { data } = useSWR(`/products/${id}`)

  // or add loader..
  if (!data) return null

  return (
    <div className="flex flex-col">
      <div className="mx-4 md:mx-36 ">
        <Pagination pages={BREADCRUMB_PAGES} currentPage='Shop'/>
        <ProductDetails product={data} />

        <div className="mt-16 flex  items-center justify-center gap-20 border-b p-4">
          {['description', 'additional information', 'reviews'].map((tab) => (
            <Text
              as="h6"
              className="font-bold capitalize text-[#737373]"
              key={tab}
            >
              {tab}
            </Text>
          ))}
        </div>
        <div className="my-20 hidden gap-2 md:flex ">
          <div className="flex w-full flex-col gap-8">
            <Text as="h3" className="font-bold uppercase text-[#252B42]">
              the quick fox jumps over
            </Text>
            <div className="flex flex-col gap-6">
              <Text as="p" className="text-sm text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </Text>
              <Text as="p" className="text-sm text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </Text>
              <Text as="p" className="text-sm text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </Text>
            </div>
          </div>
          <div className="w-[-webkit-fill-available] overflow-hidden rounded shadow-lg">
            <Image
              src={'/carousel-inner.png'}
              width={430}
              height={400}
              alt="sample"
              className="w-[-webkit-fill-available]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#FAFAFA] px-36 py-20">
        <div className="hidden flex-col md:flex">
          <Text as="h3" className="font-bold uppercase">
            Best seller products
          </Text>
          <Products limit={10} isLoadMore={false}/>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
          {['hooli', 'lya', 'brand', 'stripe', 'aws', 'brand6'].map((val) => (
            <Partners type={val} key={val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage
