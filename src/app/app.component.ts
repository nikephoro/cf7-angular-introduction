import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { Person } from './shared/interfaces/person';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // name = 'Markos';

  // //Step 1: One way binding of data

  // person = {
  //   givenName: 'Markos',
  //   surname: 'Karampatsis',
  //   age: 52,
  //   email: 'marka@aueb.gr'
  // } 

  // // Step 3: Component Input 
  // person0:Person = {
  //   givenName: "Christodoulos", 
  //   surname: "Fragkoudakis",
  //   age: 55,
  //   email: "chfrag@aueb.gr",
  //   address: "Athens, Greece"
  // }

  // person1:Person = {
  //   givenName: "John",
  //   surname: "Doe",
  //   age: 32,
  //   email: "john@example.com",
  //   address: "New York, USA"
  // }

  // users: Person[] =[
  //   {
  //   "givenName": "Ailbert",
  //   "surname": "Ghidini",
  //   "age": 1,
  //   "email": "aghidini0@bandcamp.com",
  //   "address": "Apt 1063"
  //   }, 
  
  //   {
  //   "givenName": "Giralda",
  //   "surname": "Sleeny",
  //   "age": 2,
  //   "email": "gsleeny1@cbsnews.com",
  //   "address": "Room 1572"
  //   },
  
  //   {
  //   "givenName": "Dido",
  //   "surname": "Peterffy",
  //   "age": 3,
  //   "email": "dpeterffy2@taobao.com",
  //   "address": "Suite 29"
  //   }, 
  
  //   {
  //   "givenName": "Charmion",
  //   "surname": "Gillet",
  //   "age": 4,
  //   "email": "cgillet3@wired.com",
  //   "address": "Room 1774"
  //   }, 
  
  //   {
  //   "givenName": "Tedmund",
  //   "surname": "O'Roan",
  //   "age": 5,
  //   "email": "toroan4@ustream.tv",
  //   "address": "Room 1454"
  //   }, 
  //   {
  //   "givenName": "Nedi",
  //   "surname": "Murty",
  //   "age": 6,
  //   "email": "nmurty5@chronoengine.com",
  //   "address": "Apt 674"
  //   },
    
  //   {
  //   "givenName": "Silas",
  //   "surname": "Springham",
  //   "age": 7,
  //   "email": "sspringham6@shop-pro.jp",
  //   "address": "Room 1790"
  //   }, 
  //   {
  //   "givenName": "Caleb",
  //   "surname": "Clowsley",
  //   "age": 8,
  //   "email": "cclowsley7@webs.com",
  //   "address": "Suite 33"
  //   },
  
  //   {
  //   "givenName": "Tye",
  //   "surname": "True",
  //   "age": 9,
  //   "email": "ttrue8@example.com",
  //   "address": "Room 578"
  //   },
  //    {
  //   "givenName": "Winnah",
  //   "surname": "Trembley",
  //   "age": 10,
  //   "email": "wtrembley9@mysql.com",
  //   "address": "Room 664"
  //   }, 
  
  //   {
  //   "givenName": "Taddeo",
  //   "surname": "Plastow",
  //   "age": 11,
  //   "email": "tplastowa@so-net.ne.jp",
  //   "address": "Apt 1994"
  //   }, 
  
  //   {
  //   "givenName": "Grissel",
  //   "surname": "Hurrell",
  //   "age": 12,
  //   "email": "ghurrellb@cdc.gov",
  //   "address": "PO Box 53292"
  //   },
  //    {
  //   "givenName": "Ilyse",
  //   "surname": "Traher",
  //   "age": 13,
  //   "email": "itraherc@theatlantic.com",
  //   "address": "18th Floor"
  //   }, 
  
  //   {
  //   "givenName": "Lalo",
  //   "surname": "Gratton",
  //   "age": 14,
  //   "email": "lgrattond@fda.gov",
  //   "address": "Apt 1319"
  //   }, 
  
  //   {
  //   "givenName": "Kacey",
  //   "surname": "Riepel",
  //   "age": 15,
  //   "email": "kriepele@oakley.com",
  //   "address": "Room 104"
  //   }, 
  
  //   {
  //   "givenName": "Lucho",
  //   "surname": "Ropkes",
  //   "age": 16,
  //   "email": "lropkesf@globo.com",
  //   "address": "4th Floor"
  //   }, 
  
  //   {
  //   "givenName": "Rosalyn",
  //   "surname": "Whistan",
  //   "age": 17,
  //   "email": "rwhistang@bloglovin.com",
  //   "address": "Room 1498"
  //   },
  
  //   {
  //   "givenName": "Hermann",
  //   "surname": "Burgen",
  //   "age": 18,
  //   "email": "hburgenh@tripod.com",
  //   "address": "PO Box 32274"
  //   }, 
  
  //  {
  //   "givenName": "Di",
  //   "surname": "Stolte",
  //   "age": 19,
  //   "email": "dstoltei@china.com.cn",
  //   "address": "20th Floor"
  //   }, 
  
  //   {
  //   "givenName": "Eleni",
  //   "surname": "Donnison",
  //   "age": 20,
  //   "email": "edonnisonj@hexun.com",
  //   "address": "Room 372"
  //   }
  // ]
}
