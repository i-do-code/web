import { Component, OnInit, Input, Output } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {CalendarModule, DropdownModule, SelectItem, ButtonModule} from 'primeng/primeng';
import { crimeModels } from './models/crimeModel';
import { dispatchModel } from './models/dispatchModel';
import { dataModel } from './models/dataModel';
import { CrimePredictionComponent } from './components/crime-prediction/crime-prediction.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
})
export class AppComponent {
  url: string;
  title = 'AutoCad';
  crimeModel:crimeModels;
  dispatchModel:dispatchModel;
  dataModel: dataModel;
  day: number;
  month:number;
  year: number;
  date: Date;
  route: string;
  showData: boolean;
  districts = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,22,24,25];
  selectedDepartent: number;

  constructor(private http: HttpClient){
    this.url = 'http://13.58.126.12:5000/';
    // create an empty crimemodel that'll get populated by the get request
    this.crimeModel = new crimeModels();
    this.dispatchModel = new dispatchModel();
    this.dataModel = new dataModel();
    this.dispatchModel.totalCrime = -1;
    //this.selectedDepartent = 1;
  }

  onclick(){

    this.day = this.date.getDate();
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear()
    this.route = this.selectedDepartent + '/' + this.year
    + '/' + this.month + '/' + this.day;
    this.getCrime();
    //this.getDispatch();
    this.getData();
    this.showData = true;
     
  }

  back(){
    this.showData = false;
  }

  //send the GET request on /:pd/:year/:month/:day
    getCrime(){
      this.crimeModel = new crimeModels();
      console.log(this.url + 'predict/crime/' + this.route);
      this.http.get(this.url + 'predict/crime/' + this.route).subscribe(data => {
        console.log(data);
        console.log(this.route);
        this.crimeModel.count = data["0"]["0"];
        this.crimeModel.pd = this.selectedDepartent;
        this.crimeModel.date = this.date;
        console.log(this.crimeModel.count);

      });
    }

     //send the GET request on /:pd/:year/:month/:day
     getDispatch(){
      
      //  this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      //    console.log(data);
      //    console.log(this.route);
      //  });
     }

     getData(){
       this.dataModel = new dataModel();
      console.log(this.url + 'data/' + this.route);
      this.http.get(this.url + 'data/' + this.route).subscribe(data => {
        console.log(data);
        console.log(this.route);
        console.log("running?");
        this.dataModel.abandoned_building = data['abandoned_building'];
        this.dataModel.abandoned_vehicle = data['abandoned_vehicle'];
        this.dataModel.temperature = data['temperature'];
        this.dataModel.alley_light_out = data['alley_light_out'];
        this.dataModel.street_light_out = data['street_light_out'];

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


