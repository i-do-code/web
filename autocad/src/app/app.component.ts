import { Component, OnInit, Input, Output } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {CalendarModule, DropdownModule, SelectItem, ButtonModule} from 'primeng/primeng';
import { crimeModels } from './models/crimeModel';
import { CrimePredictionComponent } from './components/crime-prediction/crime-prediction.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AutoCad';
  crimeModel:crimeModels;
  day: number;
  month:number;
  year: number;
  date: Date;
  route: string;
  districts = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,22,24,25];
  selectedDepartent: number;

  constructor(private http: HttpClient){
    // create an empty crimemodel that'll get populated by the get request
    this.crimeModel = new crimeModels();
    this.crimeModel.totalCrime = 5;
  }

  onclick(){

    this.day = this.date.getDate();
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear()
    this.getData();
  }

  //send the GET request on /:pd/:year/:month/:day
    getData(){
      this.route = 'api/' + this.selectedDepartent + '/' + this.year
      + '/' + this.month + '/' + this.day;
      this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
        console.log(data);
        console.log(this.route);
      });
    }

    setData(data){
      // set the retured data the the crimeModel
      // iterate over the array of predicted crimes
    }
 
}

// get user input
// parse user input
// create get request on route 
// add action listener to button for submitting


