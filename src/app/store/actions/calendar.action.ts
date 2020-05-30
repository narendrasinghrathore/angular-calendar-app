import { createAction, props } from "@ngrx/store";
import { IGetTotalDaysOfMonth } from "../../../app/interaface/store.interface";
const actionName = "[Calendar]:";

export const GET_TOTAL_DAYS_OF_MONTH = `${actionName} Init - Get total number of days of given months`;
export const GET_TOTAL_DAYS_OF_MONTH_SUCCESS = `${actionName} Success -Get total number of days of given months`;
export const GET_TOTAL_DAYS_OF_MONTH_FAIL = `${actionName} Fail - Get total number of days of given months`;

export const getTotalDaysOfMonth = createAction(
  GET_TOTAL_DAYS_OF_MONTH,
  props<{ payload: IGetTotalDaysOfMonth }>()
);
export const getTotalDaysOfMonthSuccess = createAction(
  GET_TOTAL_DAYS_OF_MONTH_SUCCESS,
  props<{
    totalNumberOfDays: number;
  }>()
);
export const getTotalDaysOfMonthFail = createAction(
  GET_TOTAL_DAYS_OF_MONTH_FAIL
);
