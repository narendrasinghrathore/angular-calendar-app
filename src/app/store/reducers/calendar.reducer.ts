import { Action, createReducer, on } from "@ngrx/store";
import * as Actions from "../actions/calendar.action";
import { ICalendarState } from "@app/models";
export const initialState: ICalendarState = {
  totalDaysOfMonth: 0,
  loading: false,
};

const calendarReducer = createReducer(
  initialState,
  on(Actions.getTotalDaysOfMonth, (state) => ({
    ...state,
    loading: true,
  })),
  on(Actions.getTotalDaysOfMonthSuccess, (state, { totalDaysOfMonth }) => ({
    ...state,
    loading: false,
    totalDaysOfMonth,
  })),
  on(Actions.getTotalDaysOfMonthFail, (state) => ({
    ...state,
    loading: false,
  }))
);

export function reducer(state: ICalendarState | undefined, action: Action) {
  return calendarReducer(state, action);
}
