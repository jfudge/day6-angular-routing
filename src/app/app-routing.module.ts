import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import your component pages
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

// Map your url paths to the component that should be displayed by the router-outlet
const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
