import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthScreen, HealthFacilityShiftsScreen } from '@/screens';
import { useIsLoggedIn } from '@/stores/auth';

import type { RootStackParamList } from './types';
import { TabRoutes } from './Tab.routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
  const isLoggedIn = useIsLoggedIn();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="App" component={TabRoutes} />
          <Stack.Screen name="HealthFacilityShifts" component={HealthFacilityShiftsScreen} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthScreen} />
      )}
    </Stack.Navigator>
  );
}
