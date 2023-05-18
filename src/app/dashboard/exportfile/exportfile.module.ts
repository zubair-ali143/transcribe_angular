import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportfileRoutingModule } from './exportfile-routing.module';
import { ExportfileComponent } from './exportfile.component';


@NgModule({
  declarations: [
    ExportfileComponent
  ],
  imports: [
    CommonModule,
    ExportfileRoutingModule
  ]
})
export class ExportfileModule { }
