import { EventsService } from './../services/events.service';
import { Events } from './../../models/Events';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';


@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {

  eventos$!: Observable<Events[]>;
  


  constructor( private event: EventsService) {  }

  ngOnInit(): void {
    this.onRefresh()
  }


  onRefresh() {
    // lists all the events from that user every time the page refreshes
    this.eventos$ = this.event.getEvents()
  }

}


