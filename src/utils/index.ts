import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import type { Period } from '@/types';

export const formatDateTimeRange = (date: Date): string => {
  const formattedDate = dayjs(date).format('DD/MM [às] HH[h]mm');
  return formattedDate;
};

export const translatePeriodToPt = (period: Period): string => {
  switch (period) {
    case 'morning':
      return 'manhã';
    case 'afternoon':
      return 'tarde';
    case 'night':
      return 'noite';
    default:
      return '';
  }
};

export const getWeekDays = () => {
  dayjs.locale('pt-br');

  const currentDate = dayjs();

  const weekDays = [];

  for (let i = 0; i < 7; i++) {
    const currentDay = currentDate.add(i, 'day');
    weekDays.push(currentDay.format('dddd YYYY-MM-DD'));
  }

  return weekDays;
};
