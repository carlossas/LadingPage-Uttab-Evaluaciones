import { RouterModule, Routes } from '@angular/router';
// COMPONENTES
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';


const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent }, 
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
