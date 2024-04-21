import { FlatList, ListRenderItem } from 'react-native';

import { useUserShifts } from '@/api/user/getUserShifts';
import { tw } from '@/lib';
import type { MyShifts } from '@/types';
import { MyShiftCard } from '../MyShiftCard';

export function MyShiftsList() {
  const userShifts = useUserShifts();

  const renderItem: ListRenderItem<MyShifts> = ({ item }) => <MyShiftCard MyShift={item} />;

  const onEndReached = () => {
    if (userShifts.hasNextPage && !userShifts.isFetchingNextPage) {
      userShifts.fetchNextPage();
    }
  };

  const flattenData = userShifts.data?.pages.flatMap((page) => page.data);

  if (!flattenData) {
    return null;
  }
  return (
    <FlatList
      contentContainerStyle={tw`px-4 py-4 gap-4 flex-grow-1`}
      data={flattenData}
      keyExtractor={(item) => String(item.id)}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.8}
    />
  );
}
