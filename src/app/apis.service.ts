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
  baseUrl: string = "http://localhost:8009/"

  registerUser(user: any) {
    return this.http.post(this.baseUrl+'signUp',JSON.stringify(user),httpOptions)
  }

  authenticateUser(user:any){
    return this.http.post(this.baseUrl+'login',JSON.stringify(user),httpOptions)
  }
}
