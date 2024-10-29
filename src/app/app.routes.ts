import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';

export const routes: Routes = [
   {component: HomeComponent, path: ''},
   {component: HelloComponent, path: 'hello'},
];
