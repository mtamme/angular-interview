import { Routes } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OverviewComponent } from './overview/overview.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Welcome!',
    component: WelcomeComponent,
  },
];
