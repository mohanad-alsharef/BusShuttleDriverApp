﻿import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConfigureComponent } from './configure/configure.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Guards/auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'configure',
        component: ConfigureComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
