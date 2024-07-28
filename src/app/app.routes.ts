import { Routes } from '@angular/router';
import { GenererenComponent } from './genereren/genereren.component';

export const routes: Routes = [
    { path: '**', component: GenererenComponent }
];
