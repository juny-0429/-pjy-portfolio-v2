import Badge from '@/components/Badge/Badge';
import { introduction, mbtiList } from '../data/about.data';
import sizes from '@/theme/sizes';
import { mainAboutCss } from './MainAbout.styles';
import ArchivingItem from './ArchivingItem/ArchivingItem';
import { archivingList } from '../data/archiving.data';
import { commonCss } from '@/styles/common.styles';
import Image from 'next/image';
import PjyProfileImage from '@/assets/images/park-junyoung-profile.jpg';

export default function MainAbout() {
  return (
    <section css={mainAboutCss.wrapper}>
      <div css={[mainAboutCss.profileImageWrapper, commonCss.onlyPcVisibleBlock]}>
        <Image src={PjyProfileImage.src} priority fill sizes="100%" alt="pjy profile image" />
      </div>

      <div css={mainAboutCss.informationWrapper}>
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
          <h2 css={[mainAboutCss.archivingTitle, commonCss.onlyMobileVisible]}>ARCHIVING</h2>

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
    </section>
  );
}
