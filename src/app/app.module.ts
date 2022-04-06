import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent as DisplayComponent } from './display-component/display.component';
import { PersonComponent } from './component/person-component/person.component';
import { CriminalRecordComponent } from './component/criminal-record/criminal-record.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    PersonComponent,
    CriminalRecordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
