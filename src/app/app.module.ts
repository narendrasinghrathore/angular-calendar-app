import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/stateful/home/home.component';
import { CalendarComponent } from './components/stateless/calendar/calendar.component';
import { MonthComponent } from './components/stateless/month/month.component';
import { WeekComponent } from './components/stateless/week/week.component';
import { DayComponent } from './components/stateless/day/day.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    MonthComponent,
    WeekComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
