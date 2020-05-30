import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as CalendarActions from "../../../store/actions";
import { IGetTotalDaysOfMonth } from "src/app/interaface/store.interface";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  test: number;
  constructor(private store: Store) {}

  ngOnInit(): void {
    const payload: IGetTotalDaysOfMonth = { year: 2020, month: 2 };
    this.store.dispatch(CalendarActions.getTotalDaysOfMonth({ payload }));
  }
}
