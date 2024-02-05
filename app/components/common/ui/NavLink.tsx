import { lowerCase } from 'lodash';
import DropDownIcon from '../icons/DropDown';
import clsx from 'clsx';

const NavLink = () => {
  const navLinks = ['home', 'shop', 'about', 'blog', 'contact', 'pages'];
  return (
    <ul className="flex flex-col items-center gap-[15px] md:flex-row">
      {navLinks.map((nav) => {
        const isShop = lowerCase(nav) === 'shop';
        return (
          <div
            className="flex cursor-pointer items-center gap-2 group-hover:text-red-500"
            key={nav}
          >
            <span
              className={clsx({
                'text-sm capitalize text-[#737373]': true,
                'font-bold': !isShop,
                'text-[#252B42]': isShop,
              })}
            >
              {nav}
            </span>
            {isShop && <DropDownIcon />}
          </div>
        );
      })}
    </ul>
  );
};

export default NavLink;
