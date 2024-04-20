import { Pressable, Text } from 'react-native';

import { tw } from '@/lib';

type ButtonPropsType = {
  text: string;
  onPress: () => void;
  disabled: boolean;
};

export function Button({ text, onPress, disabled }: ButtonPropsType) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={tw`py-2 px-4 rounded-2.5 ${disabled ? 'bg-disabled' : 'bg-primary'}`}
    >
      <Text style={tw`font-sans-reg text-xs text-white`}>{text}</Text>
    </Pressable>
  );
}
