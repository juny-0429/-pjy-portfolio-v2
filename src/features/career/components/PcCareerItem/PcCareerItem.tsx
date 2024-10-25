import Image, { StaticImageData } from 'next/image';
import { pcCareerItemCss } from './PcCareerItem.styles';
import theme from '@/theme';

interface ItemDataProps {
  title: string;
  logo: StaticImageData;
  date: string;
  description: string;
  content: string[];
}

interface Props {
  index: number;
  itemData: ItemDataProps;
  textColor: string;
}

export default function PcCareerItem({ index, itemData, textColor }: Props) {
  const { title, logo, date, description, content } = itemData;
  const column = (index % 2) + 1;
  const row = index + 1;

  return (
    <div css={pcCareerItemCss.wrapper} style={{ gridColumn: column, gridRow: row }}>
      {/* header */}
      <div css={pcCareerItemCss.header}>
        <div css={pcCareerItemCss.titleWrapper} style={{ color: textColor }}>
          <p css={pcCareerItemCss.date}>{date}</p>
          <p css={pcCareerItemCss.title}>{title}</p>
        </div>

        <div css={pcCareerItemCss.logoWrapper}>
          <Image src={logo} fill sizes="100%" alt="career logo" />
        </div>
      </div>

      {/* description */}
      <p css={pcCareerItemCss.description} style={{ color: textColor }}>
        {description}
      </p>

      <ul css={pcCareerItemCss.contentList}>
        {content.map((item, index) => (
          <li key={index} style={{ color: textColor === theme.colors.mainLightGreen ? theme.colors.mainGray : theme.colors.mainLightGray }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
