import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Header, DatePicker, HeaderSection } from '@/components';
import { tw } from '@/lib';
import type { RootStackParamList } from '@/routes/types';
import { HealthFacilityShiftsList } from './components';

type HealthFacilityShiftsScreenPropsType = NativeStackScreenProps<RootStackParamList, 'HealthFacilityShifts'>;

export function HealthFacilityShiftsScreen({ route }: HealthFacilityShiftsScreenPropsType) {
  const { healthFacilityId, healthFacilityName } = route.params;

  return (
    <View style={tw`flex-1`}>
      <Header showGoBack />
      <HeaderSection title={healthFacilityName} />
      <DatePicker />
      <HealthFacilityShiftsList healthFacilityId={healthFacilityId} />
    </View>
  );
}
