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
  constructor(private aresult:AllservicesService, private fb:FormBuilder, private router:Router){
    this.aresult.addestimationGetmethod().subscribe((res)=>{
      this.resultResponse = res
    })
  }


}
