import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ScrollComponent } from './pages/scroll/scroll.component';
import { TableComponent } from './pages/table/table.component';

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
  },
  {
    path: 'scroll',
    loadComponent: ()=> import('./pages/scroll/scroll.component').then(m => m.ScrollComponent)
  },{
    path: 'table',
    loadComponent: ()=> import('./pages/table/table.component').then(m => m.TableComponent)
  },
];
