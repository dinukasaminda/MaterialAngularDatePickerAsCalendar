import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarViewModule } from './calendar-view/calendar-view.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, CalendarViewModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
