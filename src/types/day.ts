import { ScheduleProps } from "./user";

export const DAY = {
  MON: 'MON',
  TUE: 'TUE',
  WED: 'WED',
  THU: 'THU',
  FRI: 'FRI',
  SAT: 'SAT',
  SUN: 'SUN',
} as const;

type DAY = typeof DAY[keyof typeof DAY];

export interface DayProps {
  day: string;
  schedules: ScheduleProps[];
}