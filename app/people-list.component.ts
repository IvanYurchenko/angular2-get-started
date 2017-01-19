import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
    selector: 'people-list',
    template: `
    <ul>
        <li *ngFor="let person of people">
        {{person.name}}
        </li>
    </ul>
    `
})

export class PeopleListComponent implements OnInit {
    people: Person[] = [];

    constructor(private _peopleService : PeopleService) { }

    ngOnInit() {
        this.people = this._peopleService.getAll();
    }
}