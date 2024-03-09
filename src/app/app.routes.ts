import { Routes } from '@angular/router';
import { HomeComponent } from './feature/delivery/home/home.component';
import { LoginComponent } from './feature/delivery/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];
