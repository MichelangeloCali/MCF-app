import type { ReactNode } from 'react';
import { View, Text } from 'react-native';

import { tw } from '@/lib';

type HeaderSectionPropsType = {
  title: string;
  children?: ReactNode;
};

export function HeaderSection({ title, children }: HeaderSectionPropsType) {
  return (
    <View style={tw`items-center py-4 bg-primary gap-4`}>
      {children}
      <Text style={tw`text-white font-sans-bold text-base text-center mb-3`}>{title}</Text>
    </View>
  );
}
