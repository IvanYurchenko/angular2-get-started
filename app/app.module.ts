import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PeopleListComponent } from './people-list.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, PeopleListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
