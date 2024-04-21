import { useState } from 'react';
import { FlatList, Pressable, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { tw } from '@/lib';

type DatePickerType = { day: string; date: string };

type DateContainerPropsType = {
  date: DatePickerType;
  onPress: () => void;
  onDateSelect: (date: DatePickerType) => void;
};

type DatePickerProps = {
  setDate: React.Dispatch<
    React.SetStateAction<{
      day: string;
      date: string;
    }>
  >;
  date: {
    day: string;
    date: string;
  };
  dateObject: {
    day: string;
    date: string;
  }[];
};

const DateContainer = ({ onPress, date, onDateSelect }: DateContainerPropsType) => {
  const handlePress = () => {
    onDateSelect(date);
    onPress();
  };
  return (
    <Pressable style={tw`flex-row bg-white p-2 h-40px w-140px items-center`} onPress={handlePress}>
      <Text style={tw`text-sm font-sans-reg`}>{date.day}</Text>
    </Pressable>
  );
};

export function DatePicker({ date, setDate, dateObject }: DatePickerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDayFilter = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const handleDateSelect = (selectedDate: DatePickerType) => {
    setDate(selectedDate);
    console.log('handleDateSelect', new Date(selectedDate.date));
  };

  const renderItem = ({ item }: { item: DatePickerType }) => (
    <DateContainer key={item.day} date={item} onPress={handleDayFilter} onDateSelect={handleDateSelect} />
  );

  return (
    <>
      <Pressable
        style={tw`flex-row bg-white rounded p-2 shadow-md h-40px w-140px items-center justify-between self-center -mt-5`}
        onPress={handleDayFilter}
      >
        <Text style={tw`text-sm font-sans-reg`}>{date.day}</Text>
        <FontAwesome5 name={`chevron-${isExpanded ? 'right' : 'down'}`} size={12} color={tw.color('primary')} />
      </Pressable>

      {isExpanded && (
        <FlatList
          data={dateObject}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          style={tw`absolute self-center top-45 z-2 rounded`}
        />
      )}
    </>
  );
}
