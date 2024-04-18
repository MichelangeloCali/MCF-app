import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { FontAwesome5 } from '@expo/vector-icons';

import { tw } from '@/lib';
import { Logo } from '@/assets';
import { useNavigation } from '@/hooks';

type HeaderPropsType = {
  showGoBack?: boolean;
};

export function Header({ showGoBack = false }: HeaderPropsType) {
  const { goBack } = useNavigation();

  return (
    <SafeAreaView edges={['top']} style={tw`pb-2 pt-4 px-2 bg-primary flex-row items-center gap-4`}>
      {showGoBack && (
        <Pressable onPress={goBack}>
          <FontAwesome5 name="chevron-left" size={20} color={tw.color('white')} />
        </Pressable>
      )}
      <Image source={Logo} contentFit="contain" style={tw`w-[100px] h-[20px]`} />
    </SafeAreaView>
  );
}
