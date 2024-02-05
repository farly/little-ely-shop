import clsx from 'clsx';
import MailIcon from '../icons/Mail';
import SocialMediaIcon from '../icons/SocialMediaIcon';
import TelIcon from '../icons/Tel';
import Text from './Text';
import CartIcon15x15 from '../icons/Cart15x15';
import Heart15x15 from '../icons/Heart15x15';
import Magnifier16x16 from '../icons/Magnifier16x16';
import UserIcon from '../icons/User';
import NavLink from './NavLink';

const HeaderView = () => {
  const socialMedia = ['instagram', 'youtube', 'facebook', 'twitter'];
  return (
    <>
      <div className="hidden h-[46px] flex-row justify-between bg-[#23856D] p-6 text-white md:flex">
        <div className="flex flex-row gap-4">
          <div className="flex items-center">
            <span className="p-[5px] pl-0">
              <TelIcon />
            </span>
            <Text as="h6" className="font-bold">
              (225) 555-0118
            </Text>
          </div>
          <div className="flex items-center">
            <span className="p-[5px]">
              <MailIcon />
            </span>
            <Text as="h6" className="font-bold">
              michelle.rivera@example.com
            </Text>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Text as="h6" className="font-bold">
            Follow Us and get a chance to win 80% off
          </Text>
        </div>
        <div className="flex items-center gap-2">
          <Text as="h6" className="font-bold">
            Follow Us:
          </Text>
          <div className="flex">
            {socialMedia.map((type, key) => (
              <span
                className={clsx({
                  'p-[5px]': true,
                  'pr-0': key + 1 === socialMedia.length,
                })}
                key={type}
              >
                <SocialMediaIcon type={type} />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-6 flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
        <div className="flex flex-col items-center gap-[5rem] md:flex-row">
          <Text className="font-bold capitalize text-[#252B42]" as="h2">
            Bandage
          </Text>
          <NavLink />
        </div>
        <div className=" flex flex-col items-center gap-[5px] md:flex-row">
          <span className="p-15px">
            <UserIcon />
          </span>
          <Text className=" text-sm font-bold text-[#23A6F0]" as="link">
            Login / Register
          </Text>
          <span className="p-[15px]">
            <Magnifier16x16 />
          </span>
          <span className="flex gap-1 p-[15px]">
            {/* TODO:CART COUNT */}
            <CartIcon15x15 />
            <span className="text-xs text-[#23A6F0]">1</span>
          </span>
          <span className="flex gap-1 p-[15px] pr-0">
            {/* TODO:HEAR COUNT */}
            <Heart15x15 />
            <span className="text-xs text-[#23A6F0]">3</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default HeaderView;
