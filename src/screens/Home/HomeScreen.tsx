import { View } from 'react-native';

import { Header, HeaderSection } from '@/components';
import { tw } from '@/lib';
import { HealthFacilityList } from './components';

export function HomeScreen() {
  return (
    <View style={tw`flex-1`}>
      <Header />
      <HeaderSection title="Unidades de Saúde" />
      <HealthFacilityList />
    </View>
  );
}
