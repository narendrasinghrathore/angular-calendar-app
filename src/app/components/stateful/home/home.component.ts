import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as CalendarActions from "@app/store";
import { IGetTotalDaysOfMonth } from "@app/models";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  totalDays;
  constructor(private store: Store) {}

  ngOnInit(): void {
    const payload: IGetTotalDaysOfMonth = { year: 2020, month: 5 };
    this.store.pipe(select(CalendarActions.selectTotal)).subscribe(val => {
      console.log(val);
    });
    this.store.dispatch(CalendarActions.getTotalDaysOfMonth({ payload }));
  }
}
