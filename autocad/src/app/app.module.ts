import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms'
import { NgModule } from '@angular/core';
import {CalendarModule, DropdownModule, ButtonModule, ChartModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CrimePredictionComponent } from './components/crime-prediction/crime-prediction.component';
import { HttpClientModule } from '@angular/common/http';
import { DataVisulizationComponent } from './components/data-visulization/data-visulization.component';
import { ForeCastComponent } from './components/fore-cast/fore-cast.component';

@NgModule({
  declarations: [
    AppComponent,
    CrimePredictionComponent,
    DataVisulizationComponent,
    ForeCastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
