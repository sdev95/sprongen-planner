import { Routes } from '@angular/router';
import { BerekenenComponent } from './components/berekenen/berekenen.component';

export const routes: Routes = [
    { path: '**', component: BerekenenComponent }
];
