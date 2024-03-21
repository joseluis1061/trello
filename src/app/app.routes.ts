import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'boards',
    loadComponent: ()=> import('./pages/boards/boards.component').then(m => m.BoardsComponent)
  }
];
