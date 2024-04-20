export type Period = 'morning' | 'afternoon' | 'night';

export type Shift = {
  shiftId: string;
  userId: string;
  available: boolean;
  period: Period;
  duration: 6 | 8 | 12 | 24;
  startTime: Date;
  endTime: Date;
};

export type HealthFacility = {
  healthFacilityId: string;
  name: string;
  type: 'hospital' | 'clinic';
  hours: 24 | 12;
  shifts: Shift[];
  shiftsPerDay: 1 | 2 | 3 | 4;
};

export type MyShifts = Shift & {
  healthFacilityType: 'hospital' | 'clinic';
  healthFacilityName: string;
};
