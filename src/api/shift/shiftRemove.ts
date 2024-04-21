import { useMutation } from '@tanstack/react-query';

import { api, queryClient } from '@/lib';
import { QueryKeys } from '@/enums/QueryKeys';

async function shiftRemove({ shiftId }: { shiftId: string }) {
  const { data } = await api.put<{ healthFacilityId: number }>(`/shift/${shiftId}/remove`);

  return data;
}

export const useShiftRemove = () =>
  useMutation({
    mutationFn: shiftRemove,
    onSuccess: ({ healthFacilityId }) => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.User, QueryKeys.Shifts],
      });
    },
  });
