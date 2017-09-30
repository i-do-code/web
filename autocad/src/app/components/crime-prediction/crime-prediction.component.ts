import { Component, OnInit, Input } from '@angular/core';
import { crimeModels } from '../../models/crimeModel';

@Component({
  selector: 'app-crime-prediction',
  templateUrl: './crime-prediction.component.html',
  styleUrls: ['./crime-prediction.component.css'],
})
export class CrimePredictionComponent implements OnInit {

  @Input() crimeModel:crimeModels;

  constructor() { }

  ngOnInit() {
  }

}
