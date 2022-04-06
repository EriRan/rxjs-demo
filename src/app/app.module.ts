import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent as DisplayComponent } from './display-component/display.component';
import { PersonComponent } from './component/person-component/person.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
