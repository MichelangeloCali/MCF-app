import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Header, HeaderSection } from '@/components';
import type { RootStackParamList } from '@/routes/types';
import { MOCK } from '@/types/mock';

type HospitalShiftsPropsType = NativeStackScreenProps<RootStackParamList, 'HospitalShifts'>;

export function HospitalShifts({ route }: HospitalShiftsPropsType) {
  const { healthUnitId } = route.params;

  const findHospitalShiftDetails = MOCK.find((health) => health.healthUnitId === healthUnitId);

  return (
    <View>
      <Header showGoBack />
      <HeaderSection title={findHospitalShiftDetails?.name || ''} />
    </View>
  );
}
