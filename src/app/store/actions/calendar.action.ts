import { createAction, props } from "@ngrx/store";
const actionName = "[Calendar]:";

export const GET_TOTAL_DAYS_OF_MONTH = `${actionName} Get total number of days of given months`;

export const getTotalDaysOfMonth = createAction(
  GET_TOTAL_DAYS_OF_MONTH,
  props<{
    year: number;
    month: number;
  }>()
);
