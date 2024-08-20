import Badge from '@/components/Badge/Badge';
import { introduction, mbtiList } from '../data/about.data';
import sizes from '@/theme/sizes';
import { mainAboutCss } from './MainAbout.styles';
import ArchivingItem from './ArchivingItem/ArchivingItem';
import { archivingList } from '../data/archiving.data';

export default function MainAbout() {
  return (
    <div css={mainAboutCss.wrapper}>
      {/* 이름 & 개발자 표시 */}
      <div css={mainAboutCss.titleWrapper}>
        <p css={mainAboutCss.title}>박준영</p>
        <p css={mainAboutCss.description}>Front-End Developer</p>
      </div>

      {/* mbti */}
      <div css={mainAboutCss.mbtiList}>
        {mbtiList.map((item, index) => (
          <Badge key={index} color="lightGreen" type="capsule" fillStyle="outline" cssStyle={sizes.badgeSize[23]}>
            {item}
          </Badge>
        ))}
      </div>

      {/* 자기 소개 */}
      <p css={mainAboutCss.introduction}>{introduction}</p>

      {/* Archiving */}
      <div css={mainAboutCss.archivingWrapper}>
        <p css={mainAboutCss.archivingTitle}>ARCHIVING</p>

        {/* Archiving Link List */}
        <div css={mainAboutCss.linkListWrapper}>
          <ArchivingItem archivingItem={archivingList.gitbook} />

          <div css={mainAboutCss.linkListRightSection}>
            <ArchivingItem archivingItem={archivingList.github} />
            <ArchivingItem archivingItem={archivingList.notion} />
          </div>
        </div>
      </div>
    </div>
  );
}
