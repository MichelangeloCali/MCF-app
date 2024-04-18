import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import type { ReactNode } from 'react';

import { tw } from '@/lib';
import { Logo } from '@/assets';

type HeaderPropsType = {
  title: string;
  children?: ReactNode;
};

export function Header({ title, children }: HeaderPropsType) {
  return (
    <SafeAreaView edges={['top']} style={tw`pb-12 pt-4 px-2 bg-primary `}>
      <Image source={Logo} contentFit="contain" style={tw`w-[100px] h-[20px]`} />

      <View style={tw`self-center pt-8`}>{children}</View>

      <View style={tw`flex-row justify-center pt-8`}>
        <Text style={tw`text-white font-sans-bold`}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
