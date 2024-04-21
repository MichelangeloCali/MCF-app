import type { NavigatorScreenParams } from '@react-navigation/native';

export type RootTabParamList = {
  App: undefined;
  Shifts: undefined;
  Home: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  App: NavigatorScreenParams<RootTabParamList>;
  Auth: undefined;
  HealthFacilityShifts: { healthFacilityId: string; healthFacilityName: string };
};
