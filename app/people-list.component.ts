import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PeopleService } from './people.service';

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

    <section *ngIf="selectedPerson">
        <h2> {{selectedPerson.name}} </h2>
        <p>{{selectedPerson.name}} weighs {{selectedPerson.weight}}
         and is {{selectedPerson.height}} tall. </p>
    </section>
    `
})

export class PeopleListComponent implements OnInit {
    people: Person[] = [];
    selectedPerson : Person;

    constructor(private _peopleService : PeopleService) { }

    ngOnInit() {
        this.people = this._peopleService.getAll();
    }

    selectPerson(person : Person) {
        this.selectedPerson = person;
    }
}