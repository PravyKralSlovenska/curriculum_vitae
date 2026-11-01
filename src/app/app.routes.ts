import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { NotFound } from './pages/not-found/not-found';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                component: Home
            }
        ]
    },
    {
        path: "**",
        component: NotFound
    }
];
