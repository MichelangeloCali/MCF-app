import { useNavigation as useReactNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { RootStackParamList } from '@/routes/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function useNavigation() {
  const navigation = useReactNavigation<NavigationProp>();

  return navigation;
}
