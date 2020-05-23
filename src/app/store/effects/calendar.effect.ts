import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import CoreService from "src/app/services/core.service";
import * as CalendarAction from "../actions/calendar.action";
import { map } from "rxjs/operators";
@Injectable()
export class CalendarEffects {
//   loadTotalNumberOfDays$ = createEffect(() =>
//     this.action$.pipe(
//       ofType(CalendarAction.GET_TOTAL_DAYS_OF_MONTH),
//       map((action: any | { year: number; month: number }) => ({year, month})),

//     )
//   );
  constructor(private action$: Actions, private coreService: CoreService) {}
}
