import { useMemo } from 'react';
import { projectListData } from '../data/project.data';

// 커스텀 훅 정의
function useProjectData(projectId: number) {
  return useMemo(() => {
    return projectListData.find((project) => project.id === projectId);
  }, [projectId]);
}

export default useProjectData;
