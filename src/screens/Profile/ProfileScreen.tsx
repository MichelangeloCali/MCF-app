import { View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { useUser } from '@/api/user/getUser';
import { Header, HeaderSection } from '@/components';
import { tw } from '@/lib';
import { ProfileCard } from './components';
import { Image } from 'expo-image';

export function ProfileScreen() {
  const user = useUser();

  console.log(user.data);

  return (
    <View>
      <Header />
      <HeaderSection
        title={user.data?.name || 'Enfermeiro'}
        children={
          <View style={tw`w-100px h-100px bg-white items-center justify-center rounded-full`}>
            {user.data?.profileImage ? (
              <Image source={{ uri: user.data.profileImage }} style={tw`w-100px h-100px rounded-full`} />
            ) : (
              <FontAwesome5 name="user" size={60} color={tw.color('grey-250')} />
            )}
          </View>
        }
      />

      <ProfileCard email={user.data?.email || ''} />
    </View>
  );
}
