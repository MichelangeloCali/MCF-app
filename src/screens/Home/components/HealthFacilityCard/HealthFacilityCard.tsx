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
      style={tw`flex-row bg-white rounded gap-3 p-3 shadow-md h-100px items-center justify-between`}
      onPress={onPressNavigation}
    >
      <View style={tw`flex-row items-center gap-3`}>
        <View style={tw`w-44px items-center`}>
          <FontAwesome5 name={hospital ? 'hospital' : 'clinic-medical'} size={30} color={tw.color('grey-500')} />
        </View>
        <View>
          <Text style={tw`font-sans-bold`}>{data.name}</Text>
          <Text style={tw`font-sans-reg text-xs`}>Estabelecimento: {hospital ? 'Hospital' : 'Clínica'}</Text>
          <Text style={tw`font-sans-reg text-xs`}>Funcionamento: {data.hours}h</Text>
          <Text style={tw`font-sans-reg text-xs`}>Turnos: {data.shiftsPerDay}</Text>
        </View>
      </View>

      <FontAwesome5 name="chevron-right" size={24} color={tw.color('grey-250')} />
    </Pressable>
  );
}
