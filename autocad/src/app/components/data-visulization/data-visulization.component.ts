import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { dataModel } from '../../models/dataModel';
import {ChartModule} from 'primeng/primeng';


@Component({
  selector: 'app-data-visulization',
  templateUrl: './data-visulization.component.html',
  styleUrls: ['./data-visulization.component.css']
})

export class DataVisulizationComponent {
  showChart = false;
 
  options = {
    responsive: false,
    maintainAspectRatio: false
  };
  graphData: any;

  @Input() dataModel:dataModel;

  constructor() { 
    this.graphData = {};
  }

  displayChart(){
      console.log("hole");
      this.showChart = true;
    this.graphData =  {
        datasets: [
          {
              label: 'Abandoned Vehicles',
              backgroundColor: '#42A5F5',
              data: this.dataModel.abandoned_vehicle
          },
          {
              label: 'Abandoned Buildings',
              backgroundColor: '#9CCC65',
              data: this.dataModel.abandoned_building
          },
          {
              label: 'Temperature',
              backgroundColor: '#FF0000',
              data: this.dataModel.temperature
          },
          {
              label: 'Alley Lights Out',
              backgroundColor: '#800000',
              data: this.dataModel.alley_light_out
          },
          {
              label: 'Street Lights Out',
              backgroundColor: '#FFFF00',
              data: this.dataModel.street_light_out
          }
        ]
        };
    }


  ngOnChanges() {
        console.log("fuggy");
        setTimeout(()=> this.graphData = {
        datasets: [
            {
                label: 'Abandoned Vehicles',
                backgroundColor: '#42A5F5',
                data: this.dataModel.abandoned_vehicle
            },
            {
                label: 'Abandoned Buildings',
                backgroundColor: '#9CCC65',
                data: this.dataModel.abandoned_building
            },
            {
                label: 'Temperature',
                backgroundColor: '#FF0000',
                data: this.dataModel.temperature
            },
            {
                label: 'Alley Lights Out',
                backgroundColor: '#800000',
                data: this.dataModel.alley_light_out
            },
            {
                label: 'Street Lights Out',
                backgroundColor: '#FFFF00',
                data: this.dataModel.street_light_out
            }
          ]
          }, 5000);
    }

  
    
  ngOnInit() {
    this.graphData =  { };
  }
}
