import { FlatList, type ListRenderItem } from 'react-native';

import { tw } from '@/lib';
import { FACILITIES } from '@/utils/mock';
import type { HealthFacility } from '@/types';
import { HealthFacilityCard } from '../HealthFacilityCard';

export function HealthFacilityList() {
  let data: HealthFacility[];

  const renderItem: ListRenderItem<HealthFacility> = ({ item }) => <HealthFacilityCard data={item} />;

  data = FACILITIES;

  if (!data?.length) {
    return null;
  }

  return (
    <FlatList
      contentContainerStyle={tw`px-4 py-4 gap-4 flex-grow-1`}
      data={data}
      keyExtractor={(item) => String(item.name)}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}
