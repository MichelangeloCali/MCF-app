import { View } from 'react-native';
import { Image } from 'expo-image';

import { Logo } from '@/assets';
import { tw } from '@/lib';

import { SignIn } from './components/SignIn';

export function AuthScreen() {
  return (
    <View style={tw`bg-primary items-center justify-center flex-1 gap-8`}>
      <Image source={Logo} contentFit="contain" style={tw`w-[200px] h-[40px]`} />
      <SignIn />
    </View>
  );
}
