import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PublishBookComponent } from './publish-book/publish-book.component';
import { AboutComponent } from './about/about.component';
import { RecentlyPublishedComponent } from './recently-published/recently-published.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublishBookComponent,
    AboutComponent,
    RecentlyPublishedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
