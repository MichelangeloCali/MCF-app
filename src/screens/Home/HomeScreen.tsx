import { View } from 'react-native';

import { Header, HospitalList } from '@/components';
import { tw } from '@/lib';

export function HomeScreen() {
  return (
    <View style={tw`flex-1`}>
      <Header title="Unidades de Saúde" />
      <HospitalList />
    </View>
  );
}
