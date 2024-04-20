import { View } from 'react-native';

import { Header, HeaderSection } from '@/components';
import { tw } from '@/lib';
import { MyShiftsList } from './components';

export function MyShiftsScreen() {
  return (
    <View style={tw`flex-1`}>
      <Header />
      <HeaderSection title="Meus Turnos" />
      <MyShiftsList />
    </View>
  );
}
