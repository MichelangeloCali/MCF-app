import { useMutation } from '@tanstack/react-query';

import { api, queryClient } from '@/lib';
import { QueryKeys } from '@/enums/QueryKeys';

async function shiftRegister({ shiftId }: { shiftId: string }) {
  const { data } = await api.put<{ healthFacilityId: number }>(`/shift/${shiftId}/register`);

  return data;
}

export const useShiftRegister = () =>
  useMutation({
    mutationFn: shiftRegister,
    onSuccess: ({ healthFacilityId }) => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.HealthFacility, healthFacilityId, QueryKeys.Shifts],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.User, QueryKeys.Shifts],
      });
    },
  });
