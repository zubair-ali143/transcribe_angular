import { AllservicesService } from './../../shared/allservices.service';
import { Component } from '@angular/core';
import {FormsModule,FormBuilder,FormGroup,FormControl,Validators,} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-addestimation',
  templateUrl: './addestimation.component.html',
  styleUrls: ['./addestimation.component.css'],
})
export class AddestimationComponent {

  constructor(
    private estimationapi: AllservicesService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  inputsvaule = new FormGroup({
    id: new FormControl(''),
    username_obj: new FormControl('', Validators.required),
    description_obj: new FormControl('', Validators.required),
    comments_obj: new FormControl('', Validators.required),
    hours_obj: new FormControl('', Validators.required),
  });
  getfunc() {
    // console.log('username:',username + '\n' + 'Hours', hours +'\n'+ 'description',description +'\n'+ 'comments', comments)
    if (this.inputsvaule.valid) {
      this.estimationapi.addestimationPostmethod(this.inputsvaule.value).subscribe((res) => {
          this.estimationapi.addestimationGetmethod().subscribe((res) => {
            console.log(res, 'get res');
            this.router.navigate(['dashboard/addestimation/estimationresult']);
          });
        });
    } else {
      alert('Please Enter Value');
    }
  }
}
