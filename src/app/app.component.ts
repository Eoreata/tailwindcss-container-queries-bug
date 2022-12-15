import {Component} from '@angular/core';

export interface Chip {
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tags: Chip[] = [
    {name:'Second '},
    {name:'Third'}
  ];

  containerSizes : string[] = ['xs', 'sm'];

  constructor() { }


}
