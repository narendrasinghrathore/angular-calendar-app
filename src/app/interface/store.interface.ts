export interface ICalendarState {
  totalDaysOfMonth: number;
  loading: boolean;
}

export interface IGetTotalDaysOfMonth {
  year: number;
  month: number;
}
