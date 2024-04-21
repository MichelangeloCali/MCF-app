import { useInfiniteQuery } from '@tanstack/react-query';

import { QueryKeys } from '@/enums/QueryKeys';
import { api } from '@/lib';
import type { HealthFacility, Shift } from '@/types';

const LIMIT = 10;

async function getHealthFacilityShifts({ page, healthFacilityId }: { page: number; healthFacilityId: number }) {
  const { data } = await api.get<Shift[]>(`/health-facility/${healthFacilityId}/shifts`, {
    params: {
      page,
      limit: LIMIT,
    },
  });

  const nextPage = page + LIMIT;
  const hasNextPage = data.length === LIMIT;

  return { data, nextPage, hasNextPage };
}

export const useHealthFacilityShifts = (healthFacilityId: number) =>
  useInfiniteQuery({
    queryKey: [QueryKeys.HealthFacility, healthFacilityId, QueryKeys.Shifts],
    queryFn: ({ pageParam }) => getHealthFacilityShifts({ page: pageParam, healthFacilityId }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNextPage) {
        return lastPage.nextPage;
      }

      return;
    },
  });
