import { Component, OnInit, Input, Output } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {CalendarModule, DropdownModule, SelectItem, ButtonModule} from 'primeng/primeng';
import { crimeModels } from './models/crimeModel';
import { foreCastModel } from './models/foreCastModel';
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
  title = 'AccuCrime';
  crimeModel:crimeModels;
  foreCastModel:foreCastModel;
  dataModel: dataModel;
  day: number;
  month:number;
  year: number;
  dateDaily: Date;
  dateFuture:Date;
  route: string;
  foreCastRoute: string;
  showData: boolean;
  showForeCast: boolean;
  showBasic: boolean;
  districts = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,22,24,25];
  dailyDistrict: number;
  futureDistrict: number;

  constructor(private http: HttpClient){
    this.showForeCast = false;
    this.showData = false;
    this.showBasic = true;
    this.url = 'http://13.58.126.12:5000/';
    // create an empty crimemodel that'll get populated by the get request
    this.crimeModel = new crimeModels();
    this.foreCastModel = new foreCastModel();
    this.dataModel = new dataModel();
    //this.selectedDepartent = 1;
  }

  forecast(){

    console.log("forecast");

    this.day = this.dateFuture.getDate();
    this.month = this.dateFuture.getMonth() + 1;
    this.year = this.dateFuture.getFullYear()
    this.foreCastRoute ='forecast/crime/' + this.futureDistrict + '/' + this.year
    + '/' + this.month + '/' + this.day;

    this.getForecast();
    this.showForeCast = true;
    this.showData = false;
    this.showBasic = false;
     
  }

  getForecast(){
    this.foreCastModel = new foreCastModel();
    console.log(this.url  + this.foreCastRoute);
    this.http.get(this.url  + this.foreCastRoute).subscribe(data => {
      console.log(data);
      console.log(this.foreCastRoute);
      this.foreCastModel.currentDate = this.dateFuture;
      this.foreCastModel.districtNumber = this.dailyDistrict;
      this.foreCastModel.crimes = data;
      // this.foreCastModel.crimes = this.dateDaily;
      console.log(this.crimeModel.count);

    });
  }


  daily(){
    console.log("daily");
    this.day = this.dateDaily.getDate();
    this.month = this.dateDaily.getMonth() + 1;
    this.year = this.dateDaily.getFullYear()
    // /forecast/crime/
    this.route =  + this.dailyDistrict + '/' + this.year
    + '/' + this.month + '/' + this.day;
    this.getCrime();
    //this.getDispatch();
    this.getData();
    this.showForeCast = false;
    this.showData = true;
    this.showBasic = false;

  }
  

  back(){
    this.showForeCast = false;
    this.showData = false;
    this.showBasic = true;
  }

    // for getting the daily prediction
    getCrime(){
      this.crimeModel = new crimeModels();
      console.log(this.url + 'predict/crime/' + this.route);
      this.http.get(this.url + 'predict/crime/' + this.route).subscribe(data => {
        console.log(data);
        console.log(this.route);
        this.crimeModel.count = data["0"]["0"];
        this.crimeModel.pd = this.dailyDistrict;
        this.crimeModel.date = this.dateDaily;
        console.log(this.crimeModel.count);

      });
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

}

// get user input
// parse user input
// create get request on route 
// add action listener to button for submitting


