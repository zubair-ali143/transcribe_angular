import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AllservicesService } from 'src/app/shared/allservices.service';

@Component({
  selector: 'app-estimationresult',
  templateUrl: './estimationresult.component.html',
  styleUrls: ['./estimationresult.component.css']
})
export class EstimationresultComponent {

  resultResponse:Array<any>= []

  inputsvaule = new FormGroup({
    id: new FormControl(''),
    username_obj: new FormControl(''),
    description_obj: new FormControl(''),
    comments_obj: new FormControl(''),
    hours_obj: new FormControl(''),
  });
  EditObject = {
    id:0,
    username_obj:'',
    description_obj: '',
    comments_obj:'',
    hours_obj:''
  }


  constructor(private result:AllservicesService, private fb:FormBuilder, private router:Router){
    this.result.addestimationGetmethod().subscribe((res)=>{
      this.resultResponse = res
    })
  }
  //Edit Method & Update Value
  editfunc(data:any){
    this.EditObject=data
  }
  //Update function
  updateVluse(){
    this.result.addestimationPutmethod(this.EditObject.id,this.EditObject).subscribe((res)=>{
      this.result.addestimationGetmethod().subscribe((res)=>{
        this.resultResponse = res
      })
    })
    let ref = document.getElementById('clear');
    ref?.click();
    this.inputsvaule.reset();
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
