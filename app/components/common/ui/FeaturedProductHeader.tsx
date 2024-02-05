import Text from './Text'

type Props = {
  headerText: string
  title: string
  description: string
}

const SectionHeader = ({ title, description, headerText }: Props) => {
  return (
    <div className="col flex flex-col justify-center gap-2">
      <Text as="h3" className="flex justify-center text-[#737373]">
        {headerText}
      </Text>
      <Text
        as="h2"
        className="flex justify-center font-bold uppercase text-[#252B42]"
      >
        {title}
      </Text>
      <Text as="h6" className="flex justify-center text-[#737373]">
        {description}
      </Text>
    </div>
  )
}

export default SectionHeader
