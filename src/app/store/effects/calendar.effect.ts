import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import CoreService from "@app/core";
import * as CalendarAction from "../actions/calendar.action";
import { map } from "rxjs/operators";
@Injectable()
export class CalendarEffects {
  constructor(private action$: Actions, private coreService: CoreService) {}

  loadTotalNumberOfDays$ = createEffect((): any =>
    this.action$.pipe(
      ofType(CalendarAction.getTotalDaysOfMonth),
      map((action) =>
        this.coreService.totalNumberOfMonths(
          action.payload.year,
          action.payload.month
        )
      ),
      map((data: number) =>
        CalendarAction.getTotalDaysOfMonthSuccess({ totalDaysOfMonth: data })
      )
    )
  );
}
