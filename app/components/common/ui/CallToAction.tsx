import { toCurrency } from '@/app/helpers/numbers';
import Text from './Text';

const CallToAction = () => {
  return (
    <div className="flex h-[40rem] items-center justify-center bg-[url('/unsplash_XEmaJaM-4nE.png')] bg-no-repeat">
      <div className="flex w-full flex-col justify-center gap-4 md:w-[35%]">
        <div className="flex justify-center text-center">
          <Text
            as="h6"
            className="flex justify-center text-center font-bold text-[#23A6F0]"
          >
            Designing Better Experience
          </Text>
        </div>
        <div className="flex justify-center text-center">
          <Text
            as="h1"
            className="flex justify-center text-center text-4xl font-bold text-[#252B42]"
          >
            Problems trying to resolve the conflict between
          </Text>
        </div>
        <div className="flex justify-center">
          <Text
            as="h6"
            className="flex justify-center text-center text-[#737373]"
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </Text>
        </div>
        <div className="flex justify-center">
          <Text
            as="h2"
            className="flex justify-center font-bold text-[#23856D]"
          >
            {toCurrency(16.48)}
          </Text>
        </div>
        <div className="mt-8 flex justify-center">
          <Text
            as="link"
            className="rounded bg-[#23A6F0] p-4 font-bold uppercase text-white hover:bg-[#219de5] hover:text-white"
          >
            add your call to action
          </Text>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
