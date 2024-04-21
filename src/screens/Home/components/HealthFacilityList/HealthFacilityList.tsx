import { FlatList, type ListRenderItem } from 'react-native';

import { useHealthFacilities } from '@/api/health-facility';
import { tw } from '@/lib';
import { FACILITIES } from '@/utils/mock';
import type { HealthFacility } from '@/types';

import { HealthFacilityCard } from '../HealthFacilityCard';

export function HealthFacilityList() {
  const healthFacilities = useHealthFacilities();

  const renderItem: ListRenderItem<HealthFacility> = ({ item }) => <HealthFacilityCard data={item} />;

  const onEndReached = () => {
    if (healthFacilities.hasNextPage && !healthFacilities.isFetchingNextPage) {
      healthFacilities.fetchNextPage();
    }
  };

  const flattenData = healthFacilities.data?.pages.flatMap((page) => page.data);

  if (!flattenData) {
    return null;
  }

  return (
    <FlatList
      contentContainerStyle={tw`px-4 py-4 gap-4 flex-grow-1`}
      data={flattenData}
      keyExtractor={(item) => String(item.name)}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.8}
    />
  );
}
