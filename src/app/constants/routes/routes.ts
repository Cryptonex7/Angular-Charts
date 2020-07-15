import { Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { TasksComponent } from '../../pages/tasks/tasks.component';
import { WorkComponent } from '../../pages/work/work.component';
import { ConnectComponent } from '../../pages/connect/connect.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  },
  {
    path: 'connect',
    component: ConnectComponent,
  },
];
