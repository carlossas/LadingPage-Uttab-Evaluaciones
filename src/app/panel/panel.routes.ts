import { RouterModule, Routes } from '@angular/router';
// COMPONENTES
import { PanelComponent } from './panel.component';


const panelRoutes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      // { path: 'login', component: LoginComponent }, 
      { path: '', redirectTo: '/', pathMatch: 'full' }
    ]
  }
];

export const PANEL_ROUTES = RouterModule.forChild(panelRoutes);
