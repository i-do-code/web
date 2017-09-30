import { Component } from '@angular/core';
import {CalendarModule, DropdownModule, SelectItem} from 'primeng/primeng';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AutoCad';
  date: Date;
  districts = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,22,24,25];
  selectedDepartent: string;

  

}
