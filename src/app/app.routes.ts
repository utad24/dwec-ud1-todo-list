import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PomodoroComponent } from './pages/pomodoro/pomodoro.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'pomodoro',
        component: PomodoroComponent
    }
];
