import { Routes } from '@angular/router';
import { Layout } from './Components/layout/layout';
import { Index } from './Components/index';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: Index
            },
            {
                path: 'index',
                component: Index
            }
        ]
    }
];
