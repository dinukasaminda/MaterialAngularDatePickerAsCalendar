import { MatCalendarBody } from './components/datepicker/calendar-body';
import { MatMultiYearView } from './components/datepicker/multi-year-view';
import { MatMonthView } from './components/datepicker/month-view';
import { MatYearView } from './components/datepicker/year-view';
import { MatCalendarHeader, MatCalendar } from './components/datepicker/calendar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleViewComponent } from './components/example-view/example-view.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExampleViewComponent,
    MatCalendarBody,
    MatCalendar,
    MatCalendarHeader,
    MatYearView,
    MatMonthView,
    MatMultiYearView
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  exports: [ExampleViewComponent],
  providers: []
})
export class CalendarViewModule {}
