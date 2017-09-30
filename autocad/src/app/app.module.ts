import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms'
import { NgModule } from '@angular/core';
import {CalendarModule, DropdownModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CrimePredictionComponent } from './components/crime-prediction/crime-prediction.component';

@NgModule({
  declarations: [
    AppComponent,
    CrimePredictionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    DropdownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
