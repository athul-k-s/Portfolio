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
                redirectTo:'/index',
                pathMatch:'full'
            },
            {
                path: 'index',
                loadComponent: ()=> import('./Components/index').then((c)=>c.Index)
            }
        ]
    }
];
