import { View, Text } from 'react-native';

import { useShiftRegister } from '@/api/shift';
import { tw } from '@/lib';
import { formatDateTimeRange, translatePeriodToPt } from '@/utils';
import type { Shift } from '@/types';
import { Button } from '../../../../components/Button';

type HealthFacilityShiftCardPropsType = {
  shift: Shift;
};

export function HealthFacilityShiftCard({ shift }: HealthFacilityShiftCardPropsType) {
  const { available, duration, endTime, period, startTime, shiftId } = shift;

  const shiftRegister = useShiftRegister();

  const handleSubmitShift = () => {
    shiftRegister.mutate({
      shiftId,
    });
  };

  return (
    <View style={tw`flex-row bg-white rounded p-3 gap-4 shadow-md h-100px items-center justify-between`}>
      <View>
        <View style={tw`flex-row items-center gap-2`}>
          <View style={tw`w-10px h-10px rounded-full ios:mb-1 ${available ? 'bg-green' : 'bg-red'}`} />
          <Text style={tw`font-sans-bold ios:mb-1`}>Turno da {translatePeriodToPt(period)}</Text>
        </View>
        <View style={tw`ml-5`}>
          <Text style={tw`font-sans-reg android:leading-5 text-xs`}>Início: {formatDateTimeRange(startTime)}</Text>
          <Text style={tw`font-sans-reg android:leading-5 text-xs`}>Fim: {formatDateTimeRange(endTime)}</Text>
          <Text style={tw`font-sans-reg android:leading-5 text-xs`}>Duração: {duration}h</Text>
        </View>
      </View>

      <Button type="register" text="CANDIDATAR-SE" disabled={!available} onPress={handleSubmitShift} />
    </View>
  );
}
