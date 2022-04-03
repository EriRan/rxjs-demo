import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { PersonComponentComponent } from './component/person-component/person-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponentComponent,
    PersonComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
