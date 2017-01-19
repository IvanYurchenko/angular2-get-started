import { Component, Input } from '@angular/core';
import { Person } from './person';

@Component({
    selector: 'person-details',
    template: `
    <section *ngIf="person">
        <h2> {{person.name}} </h2>
        <p>{{person.name}} weighs {{person.weight}}
         and is {{person.height}} tall. </p>
    </section>
    `
})

export class PersonDetailsComponent {
    @Input() person: Person;
}