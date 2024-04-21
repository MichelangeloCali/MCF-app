import { useState } from 'react';
import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Header, DatePicker, HeaderSection } from '@/components';
import { tw } from '@/lib';
import type { RootStackParamList } from '@/routes/types';
import { getWeekDays } from '@/utils';
import { HealthFacilityShiftsList } from './components';

type HealthFacilityShiftsScreenPropsType = NativeStackScreenProps<RootStackParamList, 'HealthFacilityShifts'>;

const weekDays = getWeekDays();
const dateObject = weekDays.map((item, index) => {
  if (index === 0) return { day: 'hoje', date: item.split(' ')[1] };
  if (index === 1) return { day: 'amanhã', date: item.split(' ')[1] };
  return { day: item.split(' ')[0], date: item.split(' ')[1] };
});

export function HealthFacilityShiftsScreen({ route }: HealthFacilityShiftsScreenPropsType) {
  const [date, setDate] = useState(dateObject[0]);

  const { healthFacilityId, healthFacilityName } = route.params;

  return (
    <View style={tw`flex-1`}>
      <Header showGoBack />
      <HeaderSection title={healthFacilityName} />
      <DatePicker date={date} setDate={setDate} dateObject={dateObject} />
      <HealthFacilityShiftsList healthFacilityId={healthFacilityId} />
    </View>
  );
}
