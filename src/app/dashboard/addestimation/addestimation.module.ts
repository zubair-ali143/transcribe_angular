import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddestimationRoutingModule } from './addestimation-routing.module';
import { AddestimationComponent } from './addestimation.component';


@NgModule({
  declarations: [
    AddestimationComponent
  ],
  imports: [
    CommonModule,
    AddestimationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddestimationModule { }
