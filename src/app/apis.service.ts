import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http'
const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient) { }
  baseUrl: string = "http://localhost:8080/"

  registerUser(user: any) {
    return this.http.post(this.baseUrl+'signup',JSON.stringify(user),httpOptions)
  }

  authenticateUser(user:any){
    return this.http.post(this.baseUrl+'login',JSON.stringify(user),httpOptions)
  }

  getUsers(id:any){
    return this.http.get(this.baseUrl+`view/${id}`,httpOptions)
  }

  deleteUser(id:any){
    console.log("local",localStorage.getItem('id'))
    return this.http.post(this.baseUrl+`deleteUser/${id}/${localStorage.getItem('id')}`,httpOptions)
  }
  updateUser(user:any,id:any){
    return this.http.post(this.baseUrl+`update/${user._id}/${localStorage.getItem('id')}`,JSON.stringify(user),httpOptions)
  }
}
