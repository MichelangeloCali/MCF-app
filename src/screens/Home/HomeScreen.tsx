import { View } from 'react-native';

import { Header, HeaderSection, HospitalList } from '@/components';
import { tw } from '@/lib';

export function HomeScreen() {
  return (
    <View style={tw`flex-1`}>
      <Header />
      <HeaderSection title="Unidades de Saúde" />
      <HospitalList />
    </View>
  );
}
