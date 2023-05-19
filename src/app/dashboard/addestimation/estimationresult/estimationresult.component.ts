import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AllservicesService } from 'src/app/shared/allservices.service';

@Component({
  selector: 'app-estimationresult',
  templateUrl: './estimationresult.component.html',
  styleUrls: ['./estimationresult.component.css']
})
export class EstimationresultComponent {

  resultResponse:Array<any>= []



  constructor(private result:AllservicesService, private fb:FormBuilder, private router:Router){
    this.result.addestimationGetmethod().subscribe((res)=>{
      this.resultResponse = res
    })
  }
  //Delete Method
  delEstimation(data:any){
    this.result.addestimationDeletemethod(data.id).subscribe((res)=>{
      this.result.addestimationGetmethod().subscribe((res)=>{
        this.resultResponse=res;
      })
    })
  }
}
