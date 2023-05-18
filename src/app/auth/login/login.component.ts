import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AllservicesService } from './../../shared/allservices.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginapi:AllservicesService, private router:Router, fb:FormBuilder){}

  //login inputs
  loginInput = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')

  })
  //login page
  login(){
    this.loginapi.signupAllusers().subscribe((res)=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginInput.value.email && a.password === this.loginInput.value.password
      });
      if(user){
        this.router.navigate(['dashboard/estimations']);
        this.loginInput.reset();
        // alert('successfully login')
      }else{
        alert('login failed')
      }
    })
  }
}
