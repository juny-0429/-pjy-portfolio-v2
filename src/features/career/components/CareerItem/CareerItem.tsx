import { careerItemCss } from './CareerItem.styles';
import Image, { StaticImageData } from 'next/image';

interface Props {
  title: string;
  logo: StaticImageData;
  date: string;
  description: string;
  content: string[];
}

export default function CareerItem({ title, logo, date, description, content }: Props) {
  return (
    <div css={careerItemCss.wrapper}>
      <div css={careerItemCss.titleWrapper}>
        <span css={careerItemCss.title}>{title}</span>

        <div css={careerItemCss.logoWrapper}>
          <Image src={logo} width={30} height={30} alt="career logo" />
        </div>
      </div>

      <time css={careerItemCss.date}>{date}</time>

      <p css={careerItemCss.description}>{description}</p>

      <ul css={careerItemCss.contentList}>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
