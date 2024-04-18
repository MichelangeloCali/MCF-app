import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { tw } from '@/lib/tailwind';
import { HomeScreen, ProfileScreen, MyShiftsScreen } from '@/screens';

import type { RootTabParamList } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="hospital-alt" color={focused ? tw.color('primary') : tw.color('grey-250')} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Shifts"
        component={MyShiftsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="notes-medical" color={focused ? tw.color('primary') : tw.color('grey-250')} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="user-md" color={focused ? tw.color('primary') : tw.color('grey-250')} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
