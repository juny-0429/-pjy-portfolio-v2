import Image, { StaticImageData } from 'next/image';
import { PropsWithChildren } from 'react';
import { pcCareerItemCss } from './PcCareerItem.styles';

interface Props {
  index: number;
  title: string;
  logo: StaticImageData;
  date: string;
  description: string;
  textColor: string;
}

export default function PcCareerItem({ index, title, logo, date, description, children, textColor }: PropsWithChildren<Props>) {
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
          <Image src={logo} fill alt="career logo" />
        </div>
      </div>

      {/* description */}
      <p css={pcCareerItemCss.description}>{description}</p>

      {children}
    </div>
  );
}
