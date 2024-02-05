import Image from 'next/image';
import Text from './Text';
import FeaturedPostCard from './FeaturedPostCard';
import StarIcon from '../icons/Star';
import CallToAction from './CallToAction';

const FeaturedPost = () => {
  const tempArr = [...Array(3)].map((_, key) => ({
    title: `Loudest à la Madison #1 
    (L'integral)`,
    id: key,
    description: `We focus on ergonomics and meeting 
    you where you work. It's only a 
    keystroke away.`,
    time: '22 April 2021',
    comments: [{ user: 1, name: 'Sam', comment: 'Sample comment' }],
    img: '/cover1.png',
  })); //TODO: FETCH FROM API

  return (
    <div className="mt-6 flex flex-col gap-4 ">
      <div className="mx-5 md:mx-32 ">
        <div className="my-12 flex flex-col justify-center gap-2">
          <Text as="h6" className="flex justify-center text-[#23A6F0]">
            Practice Advice
          </Text>
          <Text
            as="h1"
            className="flex justify-center !text-4xl font-bold uppercase text-[#252B42]"
          >
            Featured post
          </Text>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          {tempArr.map((post) => (
            <FeaturedPostCard key={post.id} {...post} />
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start gap-28 px-5 py-12 md:flex-row md:px-20">
          <div className="mt-4 flex w-full flex-col justify-center gap-6">
            <Text as="h2" className="flex justify-center font-bold">
              What they say about us
            </Text>
            <div className="flex w-full flex-col justify-center">
              <div className="flex w-full justify-center">
                <span className="relative flex h-20 w-20 justify-center overflow-hidden rounded-full border-[2px] border-[#BDBDBD]">
                  <Image
                    src={'/cover1.png'}
                    width={100}
                    height={100}
                    className="rounded-full"
                    alt="user"
                  />
                </span>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <div className="flex w-full flex-col justify-center">
                  <span className="flex items-center justify-center">
                    {[...Array(5)].map((_, key) => (
                      <StarIcon key={key} fill={key < 4} />
                    ))}
                  </span>
                </div>
                <div className="flex w-full justify-center">
                  <Text
                    as="h6"
                    className="flex w-full justify-center text-wrap text-center font-bold text-[#737373]"
                  >
                    Slate helps you see how many more days you need to work to
                    reach your financial goal.
                  </Text>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <div className="flex justify-center">
                  <Text
                    as="h6"
                    className="flex justify-center font-bold text-[#23A6F0]"
                  >
                    Regina Miles
                  </Text>
                </div>
                <div className="flex justify-center">
                  <Text
                    as="h6"
                    className="flex justify-center font-bold text-[#252B42]"
                  >
                    Designer
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-3 justify-center gap-2 overflow-hidden">
            {[...Array(9)].map((_, key) => (
              <div key={key} className="h-[120px] w-full">
                <Image
                  src="/cover1.png"
                  alt="sample"
                  className="h-full w-full"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
  );
};

export default FeaturedPost;
