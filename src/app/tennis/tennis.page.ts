import { Component, OnInit } from '@angular/core';
import {Tennis} from './tennis';

@Component({
  selector: 'app-tennis',
  templateUrl: './tennis.page.html',
  styleUrls: ['./tennis.page.scss'],
})
export class TennisPage implements OnInit {
  tennis: Tennis[] = [
    {
      id: 'r1',
      title: 'curso',
      // eslint-disable-next-line max-len
      imageUrl: 'https://www.liveabout.com/thmb/rC73Tl0nBlYStXTVXrCRAnhPaq8=/3888x2592/filters:fill(auto,1)/tennis-ball-on-tennis-court-125847528-58db9de83df78c5162dba2ee.jpg',
      ingredients: ['French fries', 'Pork Meat']

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
