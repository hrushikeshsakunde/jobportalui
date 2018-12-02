import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { JobViewComponent } from './job-view/job-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  {
    path: 'jobs',
    component: DashboardComponent
  },
  {
    path: 'add',
    component: JobEditComponent
  },
  {
    path: 'edit',
    component: JobEditComponent
  },
  {
    path: 'view',
    component: JobViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
