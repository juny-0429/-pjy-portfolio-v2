import { PropsWithChildren } from 'react';
import { careerItemCss } from './CareerItem.styles';
import Image, { StaticImageData } from 'next/image';

interface Props {
  title: string;
  logo: StaticImageData;
  date: string;
  description: string;
}

export default function CareerItem({ title, logo, date, description, children }: PropsWithChildren<Props>) {
  return (
    <div css={careerItemCss.wrapper}>
      <div css={careerItemCss.titleWrapper}>
        <p css={careerItemCss.title}>{title}</p>

        <div css={careerItemCss.logoWrapper}>
          <Image src={logo} width={30} height={30} alt="career logo" />
        </div>
      </div>

      <time css={careerItemCss.date}>{date}</time>

      <p css={careerItemCss.description}>{description}</p>

      {children}
    </div>
  );
}
