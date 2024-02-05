import { keys } from 'lodash'
import SocialMediaIcon from './app/components/common/icons/SocialMediaIcon'
import Text from './app/components/common/ui/Text'

const Footer = () => {
  const details: {
    [key: string]: string[]
  } = {
    'company info': ['about us', 'Carrier', 'We are hiring', 'Blog'],
    Legal: ['about us', 'Carrier', 'We are hiring', 'Blog'],
    Features: [
      'Business Marketing',
      'User Analytic',
      'Live Chat',
      'Unlimited Support',
    ],
    Resources: ['IOS & Android', 'Watch a Demo', 'Customers', 'API'],
  }
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col px-5 py-20 md:px-40">
        <div className="flex flex-col justify-between border-b pb-12 md:flex-row">
          <Text className="font-bold capitalize text-[#252B42]" as="h2">
            Bandage
          </Text>
          <div className="flex gap-2">
            {['facebook', 'instagram', 'twitter'].map((type) => (
              <SocialMediaIcon key={type} type={type} fill="#23A6F0" />
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between md:flex-row">
          {keys(details).map((detail: string) => (
            <div key={detail} className="mb-12 flex flex-col gap-6">
              <Text as="h5" className="font-bold capitalize text-[#252B42]">
                {detail}
              </Text>
              <ul className="flex flex-col gap-4">
                {details[detail as keyof object].map((sub: string) => (
                  <li
                    key={sub + detail}
                    className="text-sm font-bold capitalize text-[#737373]"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-10">
            <Text as="h5" className="font-bold capitalize text-[#252B42]">
              Get in touch
            </Text>
            <form>
              <input
                placeholder="Your email"
                type="email"
                className="h-[58px] rounded-bl rounded-tl border border-[##E6E6E6] p-4"
              />
              <button
                type="submit"
                className="h-[58px] rounded-br rounded-tr bg-[#23A6F0] p-4 text-sm text-white"
              >
                Subscribe
              </button>
              <Text as="h6" className="mt-1 text-xs text-[#737373]">
                Lore imp sum dolor Amit
              </Text>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#FAFAFA] px-5 py-5 md:px-40">
        <Text as="h6" className="font-bold text-[#737373]">
          Made With Love By Finland All Right Reserved{' '}
        </Text>
      </div>
    </div>
  )
}

export default Footer;
