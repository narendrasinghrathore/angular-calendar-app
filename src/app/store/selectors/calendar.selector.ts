import { createSelector } from "@ngrx/store";
import { ICalendarState } from "@app/models";

export const selectState = (state: ICalendarState) => state;

export const selectTotal = createSelector(
  selectState,
  (state: ICalendarState) => state.totalDaysOfMonth
);
