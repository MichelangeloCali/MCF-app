import { View, Text } from 'react-native';

import { tw } from '@/lib';
import { useUser } from '@/api/user/getUser';

export function ProfileCard({ email }: { email: string }) {
  return (
    <View style={tw`bg-white rounded m-4 p-4 gap-2 shadow-md h-100px`}>
      <Text style={tw`font-sans-bold text-base`}>Dados Pessoais</Text>

      <Text style={tw`font-sans-reg text-sm`}>E-mail: {email}</Text>
    </View>
  );
}
