import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';


export const routes: Routes = [
    {path:'for-directive-example', component:ForDirectiveExampleComponent},
    {path:'welcome', component:WelcomeComponent},
    {path:'component-input-example', component: ComponentInputExampleComponent},
    {path:'event-bind-example', component: EventBindExampleComponent},
    {path:'', redirectTo:'/welcome', pathMatch:'full'}
];


