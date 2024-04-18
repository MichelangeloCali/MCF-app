import { FlatList, type ListRenderItem } from 'react-native';

import { tw } from '@/lib';
import { HospitalCard } from '../HospitalCard';
import type { Hospital } from '@/types';
import { MOCK } from '@/types/mock';

export function HospitalList() {
  let data: Hospital[];

  const renderItem: ListRenderItem<Hospital> = ({ item }) => <HospitalCard data={item} />;

  data = MOCK;

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
