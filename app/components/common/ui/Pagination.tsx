import clsx from 'clsx';
import ArrowRightIcon from '../icons/ArrowRight';
import Text from './Text';
import { lowerCase } from 'lodash';

type Props = {
  pages: string[]
  currentPage: string
}

const Breadcrumbs = ({
  pages,
  currentPage
} : Props) => {
  return (
    <div className="my-8 flex  justify-center gap-2 md:my-2 md:justify-start">
      {pages.map((page, key) => (
        <div className="flex gap-2" key={page}>
          <Text
            as="h6"
            className={clsx({
              capitalize: true,
              'font-bold': lowerCase(currentPage) !== lowerCase(page),
              'text-[#BDBDBD]': lowerCase(currentPage) === lowerCase(page),
            })}
          >
            {page}
          </Text>
          {key < pages.length - 1 && <ArrowRightIcon fill="#BDBDBD" />}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
