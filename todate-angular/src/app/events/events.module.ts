import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsFormComponent } from './events-form/events-form.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EventsFormComponent,
    ListEventsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EventsModule { }
