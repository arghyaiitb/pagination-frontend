import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {RecentlyPublishedComponent} from './recently-published/recently-published.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'recently-published', component: RecentlyPublishedComponent},
  {path: 'app-login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
