import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./features/homepage/homepage.component";
import {AboutComponent} from "./features/about/about.component";
import {ContactsComponent} from "./features/contacts/contacts.component";
import {ServicesComponent} from "./features/services/services.component";

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'services', component: ServicesComponent},
  {path: '', redirectTo: 'homepage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
