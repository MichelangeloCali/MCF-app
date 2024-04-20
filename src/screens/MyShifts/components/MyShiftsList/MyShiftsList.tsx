import { FlatList, ListRenderItem } from 'react-native';

import { tw } from '@/lib';
import { MY_SHIFTS } from '@/utils/mock';
import type { MyShifts } from '@/types';
import { MyShiftCard } from '../MyShiftCard';

export function MyShiftsList() {
  let data: MyShifts[] = [];

  const renderItem: ListRenderItem<MyShifts> = ({ item }) => <MyShiftCard MyShift={item} />;

  data = MY_SHIFTS;

  if (!data?.length) {
    return null;
  }

  return (
    <FlatList
      contentContainerStyle={tw`px-4 py-4 gap-4 flex-grow-1`}
      data={data}
      keyExtractor={(item) => String(item.userId + item.shiftId)}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}
