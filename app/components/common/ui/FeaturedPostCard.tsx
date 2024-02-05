import Image from 'next/image';
import ArrowRightIcon from '../icons/ArrowRight';
import TimeIcon from '../icons/Time';
import Text from './Text';
import StatsIcon from '../icons/Stats';

const FeaturedPostCard = ({
  id,
  img,
  title,
  description,
  time,
  comments,
}: any) => {
  return (
    <div
      key={id}
      className="flex w-auto flex-col justify-center gap-4 rounded shadow"
    >
      <div className="w-full">
        <Image
          src={img}
          width={350}
          height={100}
          alt="sample"
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex w-full gap-2">
          {['google', 'trending', 'new'].map((category) => (
            <div key={category}>
              <Text as="link" className="text-[12px] capitalize">
                {category}
              </Text>
            </div>
          ))}
        </div>
        <Text as="h5" className="w-[80%] text-[20px] text-[#252B42]">
          {title}
        </Text>
        <Text as="p" className="text-[#737373]">
          {description}
        </Text>
        <div className="flex justify-between">
          <span className="flex gap-2">
            <TimeIcon />
            <Text as="h6" className="text-[12px] text-[#737373]">
              {time}
            </Text>
          </span>
          <span className="flex gap-2">
            <StatsIcon />
            <Text as="h6" className="text-[12px] text-[#737373]">
              {comments.length} comments
            </Text>
          </span>
        </div>
        <span className="flex items-center gap-2">
          <Text as="h6" className="font-bold text-[#737373]">
            Learn More
          </Text>
          <ArrowRightIcon />
        </span>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
