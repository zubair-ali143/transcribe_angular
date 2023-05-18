import { AllservicesService } from './../../shared/allservices.service';
import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-addestimation',
  templateUrl: './addestimation.component.html',
  styleUrls: ['./addestimation.component.css']
})
export class AddestimationComponent {



constructor(private estimationapi:AllservicesService, private router:Router, private fb:FormBuilder){}
inputsvaule = new FormGroup({
  username_obj : new FormControl(''),
  description_obj : new FormControl(''),
  comments_obj : new FormControl(''),
  hours_obj : new FormControl('')
})
  getfunc(){
    // console.log('username:',username + '\n' + 'Hours', hours +'\n'+ 'description',description +'\n'+ 'comments', comments)
   if(this.inputsvaule.value.username_obj !=='' && this.inputsvaule.value.description_obj !=='' && this.inputsvaule.value.comments_obj !=='' && this.inputsvaule.value.hours_obj !==''){
     this.estimationapi.addestimationPostmethod(this.inputsvaule.value).subscribe((res)=>{
       
         this.estimationapi.addestimationGetmethod().subscribe((res)=>{
           console.log(res, 'get res')
           this.router.navigate(['dashboard/estimationresult'])
         })
     })
   }else{
    alert('Please Enter Value')
   }
  }
}
