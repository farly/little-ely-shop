import BookReader from '../icons/BookReader';
import CoolIcon from '../icons/Cool';
import GrowthIcon from '../icons/Growth';
import Text from './Text';

const BestServiceFeature = () => {
  const bestFeatures = [
    {
      Icon: BookReader,
      title: 'Easy Wins',
      description: ' Get your best looking smile now!',
    },
    {
      Icon: CoolIcon,
      title: 'Concrete',
      description:
        ' Defalcate is most focused in helping you discover your most beautiful smile',
    },
    {
      Icon: GrowthIcon,
      title: 'Hack Growth',
      description: 'Overcame any hurdle or any other problem.',
    },
  ];
  return (
    <div className="my-12 flex w-full flex-col justify-center md:flex-row md:justify-between">
      {bestFeatures.map(({ title, Icon, description }: any) => (
        <div
          className="flex w-full flex-col justify-center gap-2 md:w-[30%]"
          key={title}
        >
          <span className="flex justify-center">
            <Icon />
          </span>
          <Text
            as="h3"
            className="flex justify-center font-bold text-[#252B42]"
          >
            {title}
          </Text>
          <Text
            as="h5"
            className="flex justify-center text-center text-[#737373]"
          >
            {description}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default BestServiceFeature;
