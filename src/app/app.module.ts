import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent as DisplayComponent } from './display-component/display.component';
import { PersonComponent } from './component/person-component/person.component';
import { CriminalRecordComponent } from './component/criminal-record/criminal-record.component';
import { LocationDataComponent } from './component/location-data/location-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    PersonComponent,
    CriminalRecordComponent,
    LocationDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
