import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PeopleService } from './people.service';
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

export class PersonDetailsComponent implements OnInit, OnDestroy {
    person: Person;
    sub: any;

    constructor(private peopleService: PeopleService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = Number.parseInt(params['id']);
            this.person = this.peopleService.get(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
