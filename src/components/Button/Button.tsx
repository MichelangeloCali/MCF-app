import { Pressable, Text } from 'react-native';

import { tw } from '@/lib';

type ButtonPropsType = {
  type: 'register' | 'remove';
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

export function Button({ type, text, onPress, disabled }: ButtonPropsType) {
  const registerType = type === 'register';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={tw`py-2 px-4 rounded-2.5 ${registerType && disabled ? 'bg-disabled' : registerType && !disabled ? 'bg-primary' : 'bg-red'}`}
    >
      <Text style={tw`font-sans-reg text-xs text-white`}>{text}</Text>
    </Pressable>
  );
}
