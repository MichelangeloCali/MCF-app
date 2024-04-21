import { FlatList, type ListRenderItem } from 'react-native';

import { tw } from '@/lib';
import { useHealthFacilityShifts } from '@/api/health-facility';
import { FACILITIES } from '@/utils/mock';
import type { Shift } from '@/types';
import { HealthFacilityShiftCard } from '../HealthFacilityShiftCard';

type HealthFacilityShiftsListPropsType = {
  healthFacilityId: string;
};

export function HealthFacilityShiftsList({ healthFacilityId }: HealthFacilityShiftsListPropsType) {
  const healthFacilityShifts = useHealthFacilityShifts(Number(healthFacilityId));

  const renderItem: ListRenderItem<Shift> = ({ item }) => <HealthFacilityShiftCard shift={item} />;

  const onEndReached = () => {
    if (healthFacilityShifts.hasNextPage && !healthFacilityShifts.isFetchingNextPage) {
      healthFacilityShifts.fetchNextPage();
    }
  };

  const flattenData = healthFacilityShifts.data?.pages.flatMap((page) => page.data);

  if (!flattenData) {
    return null;
  }

  return (
    <FlatList
      contentContainerStyle={tw`px-4 py-4 gap-4 flex-grow-1`}
      data={flattenData}
      keyExtractor={(item) => String(item.shiftId)}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.8}
    />
  );
}
