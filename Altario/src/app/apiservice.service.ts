import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  //connect frontend to backend

  apiUrl ='http://localhost:3000/Api';


  //get all data from Payments
  getAllData():Observable<any>{
    return this.http.get(`${this.apiUrl}`)
  }

  //Create data
  createData(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}`,data);
  }

  //Delete data
  deleteData(id:any):Observable<any>{
    let ids =id;
    return this.http.delete(`${this.apiUrl}/${ids}`);
  }
  
    //Update data
    updateData(data:any,id:any):Observable<any>{
      let ids = id;
      return this.http.put(`${this.apiUrl}/${ids}`,data);
    }

  setBias(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}`,data);
  }
}
