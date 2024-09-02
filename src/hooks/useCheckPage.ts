import { useRouter } from 'next/router';
import { useMemo } from 'react';

export type UsePageCheckReturn = ReturnType<typeof useCheckPage>;

export default function useCheckPage() {
  const router = useRouter();

  const isProjectDetailPage = useMemo(() => router.pathname.startsWith('/project'), [router.pathname]);

  return { isProjectDetailPage };
}
