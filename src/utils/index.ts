import dayjs from 'dayjs';

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
