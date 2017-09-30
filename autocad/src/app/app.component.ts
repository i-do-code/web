import { Component, OnInit, Input, Output } from '@angular/core';
import {CalendarModule, DropdownModule, SelectItem} from 'primeng/primeng';
import { crimeModels } from './models/crimeModel';
import { CrimePredictionComponent } from './components/crime-prediction/crime-prediction.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AutoCad';
  crimeModel:crimeModels;
  date: Date;
  districts = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,22,24,25];
  selectedDepartent: string;

  constructor(){
    this.crimeModel = new crimeModels();
    this.crimeModel.totalCrime = 5;
  }
   
}
