import { useInfiniteQuery } from '@tanstack/react-query';

import { QueryKeys } from '@/enums/QueryKeys';
import { api } from '@/lib';
import type { HealthFacility } from '@/types';

const LIMIT = 10;

async function getHealthFacilities(page: number) {
  const { data } = await api.get<HealthFacility[]>('/health-facility', {
    params: {
      page,
      limit: LIMIT,
    },
  });

  const nextPage = page + 1;
  const hasNextPage = data.length === LIMIT;

  return { data, nextPage, hasNextPage };
}

export const useHealthFacilities = () =>
  useInfiniteQuery({
    queryKey: [QueryKeys.HealthFacility],
    queryFn: ({ pageParam }) => getHealthFacilities(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNextPage) {
        return lastPage.nextPage;
      }

      return;
    },
  });
