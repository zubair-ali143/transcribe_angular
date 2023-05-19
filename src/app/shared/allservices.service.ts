import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllservicesService {
  constructor(private http: HttpClient) {}
  //signup page (post method)
  signupPostmethod(signupdata: any) {
    return this.http.post('http://localhost:3000/signuppage', signupdata).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //Add Estimation page (post method)
  addestimationPostmethod(addestimation: any) {
    return this.http
      .post('http://localhost:3000/addestimation', addestimation)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  //Add Estimation Page (get method)
  addestimationGetmethod() {
    return this.http.get('http://localhost:3000/addestimation').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //Add Estimation Page (delete Method)
  addestimationDeletemethod(id: number) {
    return this.http.delete(`http://localhost:3000/addestimation/${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  //Add Estimation Page (Edit Method)
  addestimationEditmethod(id: number, data: any): Observable<any> {
    return this.http
      .put(`http://localhost:3000/addestimation/${id}`, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  //singup get method
  signupAllusers() {
    return this.http.get('http://localhost:3000/signuppage').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
