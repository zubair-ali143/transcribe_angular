import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AllservicesService } from 'src/app/shared/allservices.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
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

