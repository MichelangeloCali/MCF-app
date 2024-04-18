import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HospitalShifts } from '@/screens';

import type { RootStackParamList } from './types';
import { TabRoutes } from './Tab.routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="App" component={TabRoutes} />
      <Stack.Screen name="HospitalShifts" component={HospitalShifts} />
    </Stack.Navigator>
  );
}
