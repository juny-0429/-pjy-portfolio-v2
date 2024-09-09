import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  // 정적 파일, API, Next.js 내부 파일들은 미들웨어 처리하지 않음
  if (req.nextUrl.pathname.startsWith('/_next') || req.nextUrl.pathname.includes('/api/') || PUBLIC_FILE.test(req.nextUrl.pathname)) {
    return;
  }

  // locale이 기본 값인 경우에만 처리
  if (req.nextUrl.locale === 'default') {
    // 쿠키에서 언어 값을 가져오고 없으면 기본값으로 'ko' 설정
    const locale = req.cookies.get('NEXT_LOCALE')?.value || 'ko'; // 기본값을 'ko'로 설정

    // 선택된 언어로 리디렉션
    return NextResponse.redirect(new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url));
  }
}
