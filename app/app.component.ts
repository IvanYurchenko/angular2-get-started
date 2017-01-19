import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <people-list>
    `,
    providers: [PeopleService]
})

export class AppComponent {
    title: String = 'Hello world!';
 }
