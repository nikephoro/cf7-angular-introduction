import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})

export class ComponentInputExampleComponent {

  person0: Person = {
    givenName:'Christodoulos',
    surname: 'Fragkoudakis',
    age:55,
    email: 'chfrag@aueb.gr',
    address: 'New York, USA'
  }

  person1: Person = {
    givenName: 'Nikephoro',
    surname: 'Logothetis',
    age: 33,
    email: 'nikephoroslogothetis@gmail.com',
    address: 'Capitol City, Canada'
  }
}
