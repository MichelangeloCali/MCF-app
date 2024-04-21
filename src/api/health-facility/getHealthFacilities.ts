import { useInfiniteQuery } from '@tanstack/react-query';

import { QueryKeys } from '@/enums/QueryKeys';
import { api } from '@/lib';
import type { HealthFacility } from '@/types';

const LIMIT = 4;

async function getHealthFacilities(page: number) {
  const { data } = await api.get<HealthFacility[]>('/health-facility', {
    params: {
      page,
      limit: LIMIT,
    },
  });

  const nextPage = page + LIMIT;
  const hasNextPage = data.length === LIMIT;
  console.log(data, nextPage, hasNextPage);
  return { data, nextPage, hasNextPage };
}

export const useHealthFacilities = () =>
  useInfiniteQuery({
    queryKey: [QueryKeys.HealthFacility],
    queryFn: ({ pageParam }) => getHealthFacilities(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNextPage) {
        return lastPage.nextPage;
      }

      return;
    },
  });
