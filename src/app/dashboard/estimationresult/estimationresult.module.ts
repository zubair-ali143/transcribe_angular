import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstimationresultRoutingModule } from './estimationresult-routing.module';
import { EstimationresultComponent } from './estimationresult.component';


@NgModule({
  declarations: [
    EstimationresultComponent
  ],
  imports: [
    CommonModule,
    EstimationresultRoutingModule
  ]
})
export class EstimationresultModule { }
