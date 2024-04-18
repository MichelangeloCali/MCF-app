import { View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { Header, HeaderSection } from '@/components';
import { tw } from '@/lib';

export function ProfileScreen() {
  return (
    <View>
      <Header />
      <HeaderSection
        title="Fulano de Tal"
        children={
          <View style={tw`w-100px h-100px bg-white items-center justify-center rounded-full`}>
            <FontAwesome5 name="user" size={60} color={tw.color('grey-250')} />
          </View>
        }
      />
    </View>
  );
}
