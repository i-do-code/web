import { Component, OnInit, Input } from '@angular/core';
import { crimeModels } from '../../models/crimeModel';
import {ChartModule} from 'primeng/primeng';

@Component({
  selector: 'app-crime-prediction',
  templateUrl: './crime-prediction.component.html',
  styleUrls: ['./crime-prediction.component.css'],
})
export class CrimePredictionComponent implements OnInit {
  options = {
    responsive: false,
    maintainAspectRatio: false
  };
  crimeData: any;

  @Input() crimeModel:crimeModels;

  constructor() { 
    this.crimeData = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };
  }

  ngOnInit() {
  }

  selectData(event) {
    console.log("an event!");
    //event.dataset = Selected dataset
    //event.element = Selected element
    //event.element._datasetIndex = Index of the dataset in data
    //event.element._index = Index of the data in dataset
}

}
