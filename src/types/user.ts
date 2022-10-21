export interface ScheduleProps {
  day: string,
  place: string,
  start: string,
  end: string,
  label: string,
}

export interface UserStateProps {
  _id: string;
  email: string;
  name: string;
  authority: string;
  profileImage?: string[];
  schedule?: ScheduleProps[],
  refreshToken: string;
  createdAt: string;
  updatedAt: string;
}