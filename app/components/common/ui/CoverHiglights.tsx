import Image from 'next/image';
import Text from './Text';

const Details = () => (
  <div className="absolute flex flex-col gap-2 p-[24px]">
    <Text as="h6" className="font-bold text-[#2DC071]">
      5 items
    </Text>
    <Text as="h1" className="!text-4xl font-bold text-[#252B42]">
      FURNITURE
    </Text>
    <Text as="h6" className="font-bold text-[#252B42]">
      Read More
    </Text>
  </div>
);

const CoverHiglights = () => {
  return (
    <div className="flex h-auto flex-col gap-2 overflow-hidden md:h-[600px] md:flex-row">
      <div className="relative h-auto w-max overflow-hidden">
        <Details />
        <Image
          src="/cover1.png"
          width={600}
          height={100}
          className="h-full"
          alt="cover1"
        />
      </div>
      <div className="flex w-max flex-col gap-2 ">
        <div className="relative h-[300px] overflow-hidden">
          <Details />
          <Image
            src="/cover2.png"
            className="h-[300px]"
            width={800}
            height={100}
            alt="cover2"
          />
        </div>
        <div className="flex h-[300px] gap-2 overflow-hidden">
          <div className="relative w-full overflow-hidden">
            <Details />
            <Image
              src="/cover3.png"
              className="h-full w-full"
              width={100}
              height={100}
              alt="cover3"
            />
          </div>
          <div className="relative w-full overflow-hidden">
            <Details />
            <Image
              src="/cover4.png"
              className="h-full w-full"
              width={100}
              height={100}
              alt="cover4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverHiglights;
