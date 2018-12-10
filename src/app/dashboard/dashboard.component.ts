import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../apis.service';
import { ComponentFactoryResolver } from '@angular/core/src/render3';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users:any
  constructor(private router:Router,private api:ApisService,private toastr:ToastrService) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(){
    this.api.getUsers(localStorage.getItem('id')).subscribe(data=>{
      this.users = data['result']
    })
  }
  deleteUser(id:any){
    this.api.deleteUser(id).subscribe(data=>{
      console.log(data)
      if(data['code'] == 200){
        this.toastr.success(data['message'])
      }
      this.getUser()
    })
  }

}
