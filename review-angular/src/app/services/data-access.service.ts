import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable()
export class DataService {
  url = "http://localhost:3000/api/employee";
  resp:any[];
  constructor(private http: Http) { }

  getData(val: any){
    return this.http.get(this.url+'/'+val)
        .subscribe(response=> {
          this.resp = response.json().password;
        });
        
  }


  // getData(){
  //   return this.http.get(this.url)
  //       .map(response => response.json())
  //       .catch(this.handleErrors);
  // }

  // postData(post){
  //   return this.http.post(this.url, JSON.stringify(post))
  //     .map(response => response.json())
  //     .catch(this.handleErrors);
  // }

  // updateData(id){
  //   return this.http.patch(this.url+'/'+id, {id:id})
  //   .map(response => response.json())
  //   .catch(this.handleErrors);
  // }

  // deleteData(id){
  //   return this.http.delete(this.url+'/'+id)
  //   .catch(this.handleErrors);
  // }

  private handleErrors(error: Response){
    if(error.status === 404)
          return Observable.throw(new NotFoundError());
      return Observable.throw(new AppError());
  }

}
