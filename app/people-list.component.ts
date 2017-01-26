import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PeopleService } from './people.service';
import { PersonDetailsComponent } from './person-details.component';

@Component({
    selector: 'people-list',
    template: `
    <ul>
        <li *ngFor="let person of people">
            <a href="#" (click)="selectPerson(person)">
                {{person.name}}
            </a>
        </li>
    </ul>

    <person-details [person]="selectedPerson"></person-details>
    `
})

export class PeopleListComponent implements OnInit {
    people: Person[] = [];
    selectedPerson: Person;

    constructor(private _peopleService : PeopleService) { }

    ngOnInit() {
        this.people = this._peopleService.getAll();
    }

    selectPerson(person: Person) {
        this.selectedPerson = person;
    }
}
