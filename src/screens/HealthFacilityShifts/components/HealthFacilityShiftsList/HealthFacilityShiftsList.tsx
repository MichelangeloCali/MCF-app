import { FlatList, type ListRenderItem } from 'react-native';

import { tw } from '@/lib';
import { MOCK } from '@/utils/mock';
import type { Shift } from '@/types';
import { HealthFacilityShiftCard } from '../HealthFacilityShiftCard';

type HealthFacilityShiftsListPropsType = {
  healthFacilityId: string;
};

export function HealthFacilityShiftsList({ healthFacilityId }: HealthFacilityShiftsListPropsType) {
  let data: Shift[] = [];

  const renderItem: ListRenderItem<Shift> = ({ item }) => <HealthFacilityShiftCard shift={item} />;

  const findHospitalShiftDetails = MOCK.find((health) => health.healthFacilityId === healthFacilityId);

  data = findHospitalShiftDetails?.shifts;

  if (!data?.length) {
    return null;
  }

  return (
    <FlatList
      contentContainerStyle={tw`px-4 py-4 gap-4 flex-grow-1`}
      data={data}
      keyExtractor={(item) => String(item.shiftId)}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}
