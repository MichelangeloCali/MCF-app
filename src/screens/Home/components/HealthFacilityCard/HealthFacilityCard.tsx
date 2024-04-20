import { View, Text, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { tw } from '@/lib';
import { useNavigation } from '@/hooks';
import type { HealthFacility } from '@/types';

type HealthFacilityCardPropsType = {
  data: HealthFacility;
};

export function HealthFacilityCard({ data }: HealthFacilityCardPropsType) {
  const { navigate } = useNavigation();

  const { healthFacilityId } = data;
  const hospital = data.type === 'hospital';

  const onPressNavigation = () => {
    navigate('HealthFacilityShifts', { healthFacilityId });
  };

  return (
    <Pressable
      style={tw`flex-row bg-white rounded p-3 gap-4 shadow-md h-100px items-center`}
      onPress={onPressNavigation}
    >
      <View style={tw`w-70px items-center`}>
        <FontAwesome5 name={hospital ? 'hospital' : 'clinic-medical'} size={50} color={tw.color('grey-500')} />
      </View>
      <View>
        <Text style={tw`font-sans-bold`}>{data.name}</Text>
        <Text style={tw`font-sans-reg`}>Estabelecimento: {hospital ? 'Hospital' : 'Clínica'}</Text>
        <Text style={tw`font-sans-reg`}>Funcionamento: {data.hours}h</Text>
        <Text style={tw`font-sans-reg`}>Turnos: {data.shiftsPerDay}</Text>
      </View>
    </Pressable>
  );
}
