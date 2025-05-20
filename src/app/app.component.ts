import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Markos';

  person = {
    givenName: 'Markos',
    surname: 'Karampatsis',
    age: 52,
    email: 'marka@aueb.gr'
  }
}
