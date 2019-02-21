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
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExampleViewComponent,
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
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  exports: [ExampleViewComponent],
  providers: [MatDatepickerModule]
})
export class CalendarViewModule {}
