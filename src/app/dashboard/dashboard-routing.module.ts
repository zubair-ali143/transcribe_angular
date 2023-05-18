import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'estimations',
        loadChildren: () =>
          import('./files/files.module').then((m) => m.FilesModule),
      },
      {
        path: 'addestimation',
        loadChildren: () =>
          import('./addestimation/addestimation.module').then((m) => m.AddestimationModule),
      },
      {
        path: 'estimationresult',
        loadChildren: () =>
          import('./estimationresult/estimationresult.module').then((m) => m.EstimationresultModule),
      },
      {
        path: 'exportfile',
        loadChildren: () =>
          import('./exportfile/exportfile.module').then((m) => m.ExportfileModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
