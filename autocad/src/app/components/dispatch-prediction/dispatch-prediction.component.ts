import { Component, OnInit, Input } from '@angular/core';
import { dispatchModel } from '../../models/dispatchModel';
import {ChartModule} from 'primeng/primeng';

@Component({
  selector: 'app-dispatch-prediction',
  templateUrl: './dispatch-prediction.component.html',
  styleUrls: ['./dispatch-prediction.component.css']
})
export class DispatchPredictionComponent implements OnInit {
  options = {
    responsive: false,
    maintainAspectRatio: false
  };
  dispatchData: any;

  @Input() dispatchModel:dispatchModel;

  constructor() { 
    this.dispatchData = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [200, 150, 50],
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
    console.log("dispatch event!");
    //event.dataset = Selected dataset
    //event.element = Selected element
    //event.element._datasetIndex = Index of the dataset in data
    //event.element._index = Index of the data in dataset
}

}
