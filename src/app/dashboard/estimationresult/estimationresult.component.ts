import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AllservicesService } from './../../shared/allservices.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  //Update Method
  // updateEstimation(){
  //   // console.log(abc.id, 'update')
  //   this.result.addestimationEditmethod(t as number, this.resultResponse ).subscribe((res)=>{
  //     this.resultResponse = res
  //   })
  // }
}
