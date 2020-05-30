export default interface IState {
  totalDaysOfMonth: number;
  loading: boolean;
}

export interface IGetTotalDaysOfMonth {
  year: number;
  month: number;
}
