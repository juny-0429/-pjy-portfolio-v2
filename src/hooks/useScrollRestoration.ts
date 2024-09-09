import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { scrollPositionState } from '@/atoms/sectionScroll';

export const useScrollRestoration = (pageKey: string) => {
  const [scrollPosition, setScrollPosition] = useRecoilState(scrollPositionState(pageKey)); // 페이지별로 스크롤 위치 저장
  const router = useRouter();

  useEffect(() => {
    const saveScrollPosition = () => {
      setScrollPosition(window.scrollY); // 현재 스크롤 위치 저장
    };

    const restoreScrollPosition = () => {
      if (scrollPosition !== undefined) {
        window.scrollTo(0, scrollPosition); // 스크롤 위치 복원
      }
    };

    // 페이지가 변경될 때 스크롤 위치 저장
    router.events.on('routeChangeStart', saveScrollPosition);

    // 페이지가 로드될 때 스크롤 위치 복원
    restoreScrollPosition();

    return () => {
      router.events.off('routeChangeStart', saveScrollPosition);
    };
  }, [router, scrollPosition, setScrollPosition]);
};
