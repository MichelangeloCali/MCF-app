import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { useShiftRemove } from '@/api/shift';
import { tw } from '@/lib';
import { formatDateTimeRange, translatePeriodToPt } from '@/utils';
import type { MyShifts } from '@/types';
import { Button } from '../../../../components/Button';

type MyShiftCardPropsType = {
  MyShift: MyShifts;
};

export function MyShiftCard({ MyShift }: MyShiftCardPropsType) {
  const { healthFacility, id, available, duration, endTime, period, startTime } = MyShift;

  console.log('shiftId card', id);

  const shitfRemove = useShiftRemove();

  const hospital = healthFacility.type === 'hospital';

  const handleSubmitShift = () => {
    shitfRemove.mutate({
      shiftId: id,
    });

    console.log('remove');
  };

  return (
    <View style={tw`flex-row bg-white rounded p-3 shadow-md h-120px items-center justify-between`}>
      <View style={tw`flex-row items-center gap-3`}>
        <View style={tw`w-44px items-center`}>
          <FontAwesome5 name={hospital ? 'hospital' : 'clinic-medical'} size={30} color={tw.color('grey-500')} />
        </View>

        <View style={tw``}>
          <Text style={tw`font-sans-bold android:leading-5`}>{healthFacility.name}</Text>
          <Text style={tw`font-sans-reg android:leading-5 text-xs`}>Turno da {translatePeriodToPt(period)}</Text>
          <Text style={tw`font-sans-reg android:leading-5 text-xs`}>Início: {formatDateTimeRange(startTime)}</Text>
          <Text style={tw`font-sans-reg android:leading-5 text-xs`}>Fim: {formatDateTimeRange(endTime)}</Text>
          <Text style={tw`font-sans-reg android:leading-5 text-xs`}>Duração: {duration}h</Text>
        </View>
      </View>
      <Button type="remove" text="RETIRAR-SE" onPress={handleSubmitShift} />
    </View>
  );
}
