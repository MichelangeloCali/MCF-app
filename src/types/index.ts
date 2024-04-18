export type Shifts = {
  shiftId: string;
  userId: string;
  available: boolean;
  period: 'morning' | 'afternoon' | 'night';
  duration: 6 | 8 | 12 | 24;
  startTime: Date;
  endTime: Date;
};

export type Hospital = {
  healthUnitId: string;
  name: string;
  type: 'hospital' | 'clinic';
  hours: 24 | 12;
  shifts: Shifts[];
  shiftsAmount: 1 | 2 | 3 | 4;
};
