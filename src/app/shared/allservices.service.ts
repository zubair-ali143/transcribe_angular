import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllservicesService {

  constructor(private http:HttpClient) { }
  //signup page (post method)
  signupPostmethod(signupdata:any){
    return this.http.post('http://localhost:3000/signuppage', signupdata).pipe(map((res:any)=>{
      return res;
    })
    );
  }

    //Add Estimation page (post method)
    addestimationPostmethod(addestimation:any){
      return this.http.post('http://localhost:3000/addestimation', addestimation).pipe(map((res:any)=>{
        return res;
      })
      );
    }

    addestimationGetmethod(){
      return this.http.get('http://localhost:3000/addestimation',).pipe(map((res:any)=>{
        return res;
      })
      );
    }

  //singup get method
  signupAllusers(){
    return this.http.get('http://localhost:3000/signuppage').pipe(map((res:any)=>{
      return res;
    })
    );
  }
}
