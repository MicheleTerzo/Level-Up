import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './features/homepage/homepage.component';
import {ServicesComponent} from './features/services/services.component';
import {AboutComponent} from './features/about/about.component';
import {ContactsComponent} from './features/contacts/contacts.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ServicesComponent,
    AboutComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
