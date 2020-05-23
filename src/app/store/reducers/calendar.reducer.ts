import { Action, createReducer, on } from "@ngrx/store";
import * as Actions from "../actions/calendar.action";
import IState from "../../interaface/store.interface";
export const initialState: IState = {
  totalDaysOfMonth: 0,
};

const calendarReducer = createReducer(
  initialState,
  on(Actions.getTotalDaysOfMonth, (state, { year, month }) => ({
    ...state,
    totalDaysOfMonth: 0,
  }))
);

export function reducer(state: IState | undefined, action: Action) {
  return calendarReducer(state, action);
}
