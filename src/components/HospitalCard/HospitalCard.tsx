import { View, Text, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { tw } from '@/lib';
import type { Hospital } from '@/types';

type HospitalCardPropsType = {
  data: Hospital;
};

export function HospitalCard({ data }: HospitalCardPropsType) {
  const hospital = data.type === 'hospital';

  return (
    <Pressable style={tw`flex-row bg-white rounded p-3 gap-4 shadow-md h-100px items-center`}>
      <View style={tw`w-70px items-center`}>
        <FontAwesome5 name={hospital ? 'hospital' : 'clinic-medical'} size={60} color={tw.color('grey-500')} />
      </View>
      <View>
        <Text style={tw`font-sans-bold`}>{data.name}</Text>
        <Text>Estabelecimento: {hospital ? 'Hospital' : 'Clínica'}</Text>
        <Text>Funcionamento: {data.hours}h</Text>
        <Text>Turnos: {data.shiftsAmount}</Text>
      </View>
    </Pressable>
  );
}
