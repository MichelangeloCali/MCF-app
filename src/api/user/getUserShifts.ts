import { useInfiniteQuery } from '@tanstack/react-query';

import { QueryKeys } from '@/enums/QueryKeys';
import { api } from '@/lib';
import type { MyShifts } from '@/types';

const LIMIT = 4;

async function getUserShifts(page: number) {
  const { data } = await api.get<MyShifts[]>('/user/shifts', {
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

export const useUserShifts = () =>
  useInfiniteQuery({
    queryKey: [QueryKeys.User, QueryKeys.Shifts],
    queryFn: ({ pageParam }) => getUserShifts(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNextPage) {
        return lastPage.nextPage;
      }

      return;
    },
  });
