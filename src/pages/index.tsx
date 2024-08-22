import Head from 'next/head';
import { pretendard } from '@/theme/fonts';
import { Element } from 'react-scroll';
import MainHome from '@/features/home/components/MainHome';
import MainAbout from '@/features/about/components/MainAbout';
import MainSkills from '@/features/skills/components/MainSkills';
import MainConnect from '@/features/connect/components/MainConnect';
import MainCareer from '@/features/career/components/MainCareer';
import MainProject from '@/features/project/components/MainProject';

export default function Home() {
  return (
    <>
      <Head>
        <title>JUNY PORTFOLIO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx global>{`
        html,
        body {
          font-family: ${pretendard.style.fontFamily};
        }
      `}</style>

      <div>
        <Element name="JUNY">
          <MainHome />
        </Element>
        <Element name="ABOUT">
          <MainAbout />
        </Element>
        <Element name="SKILLS">
          <MainSkills />
        </Element>
        <Element name="PROJECT">
          <MainProject />
        </Element>
        <Element name="CAREER">
          <MainCareer />
        </Element>
        <Element name="CONNECT">
          <MainConnect />
        </Element>
      </div>
    </>
  );
}
