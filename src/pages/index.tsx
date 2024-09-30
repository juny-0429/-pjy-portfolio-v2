import { Element } from 'react-scroll';
import MainHome from '@/features/home/components/MainHome';
import MainAbout from '@/features/about/components/MainAbout';
import MainSkills from '@/features/skills/components/MainSkills';
import MainConnect from '@/features/connect/components/MainConnect';
import MainCareer from '@/features/career/components/MainCareer';
import MainProject from '@/features/project/components/MainProject';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  useScrollRestoration('index');

  return (
    <>
      <Element name="JUNY">
        <MainHome />
      </Element>
      <Element name="ABOUT">
        <MainAbout />
      </Element>
      <Element name="CAREER">
        <MainCareer />
      </Element>
      <Element name="SKILLS">
        <MainSkills />
      </Element>
      <Element name="PROJECT">
        <MainProject />
      </Element>
      <Element name="CONNECT">
        <MainConnect />
      </Element>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'ko', ['common', 'about', 'skills', 'project', 'connect', 'multiLanguage'])),
    },
  };
};
