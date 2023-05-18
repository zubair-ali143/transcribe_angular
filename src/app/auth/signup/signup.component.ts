import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AllservicesService } from './../../shared/allservices.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private signupApi:AllservicesService, private fb:FormBuilder, private router:Router){}

  //reactive form inputs
  signupForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })

  signup(){
    if(this.signupForm.value.email !== '' && this.signupForm.value.password !== ''){
        this.signupApi.signupPostmethod(this.signupForm.value).subscribe((res)=>{
        // console.log('response');
        this.router.navigate(['login']);
        this.signupForm.reset()
        // alert('success')
      })
    }else{
      alert('error')
    }

  }
}
