
import { AddestimationComponent } from './addestimation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimationresultComponent } from './estimationresult/estimationresult.component';

const routes: Routes = [
  {
    path: '',
    component: AddestimationComponent,
  },
  {
    path: 'estimationresult',
    component: EstimationresultComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddestimationRoutingModule { }
