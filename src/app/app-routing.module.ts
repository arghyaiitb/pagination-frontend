import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {PublishBookComponent} from "./publish-book/publish-book.component";
import {RecentlyPublishedComponent} from "./recently-published/recently-published.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'publish-book', component: PublishBookComponent},
  {path: 'recently-published', component: RecentlyPublishedComponent},
  {path: '**', component: PageNotFoundComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
