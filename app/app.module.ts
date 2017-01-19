import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PeopleListComponent } from './people-list.component';
import { PeopleService } from './people.service';
import { PersonDetailsComponent } from './person-details.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, PeopleListComponent, PersonDetailsComponent ],
  bootstrap: [ AppComponent ],
  providers: [PeopleService]
})
export class AppModule { }
