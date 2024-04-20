import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Header, HeaderSection } from '@/components';
import { MOCK } from '@/utils/mock';
import type { RootStackParamList } from '@/routes/types';
import { HealthFacilityShiftsList } from './components';

type HealthFacilityShiftsScreenPropsType = NativeStackScreenProps<RootStackParamList, 'HealthFacilityShifts'>;

export function HealthFacilityShiftsScreen({ route }: HealthFacilityShiftsScreenPropsType) {
  const { healthFacilityId } = route.params;

  const findHospitalShiftDetails = MOCK.find((health) => health.healthFacilityId === healthFacilityId);

  const shifts = findHospitalShiftDetails?.shifts;

  console.log('shifts==', shifts);

  return (
    <View>
      <Header showGoBack />
      <HeaderSection title={findHospitalShiftDetails?.name || ''} />
      <HealthFacilityShiftsList healthFacilityId={healthFacilityId} />
    </View>
  );
}
