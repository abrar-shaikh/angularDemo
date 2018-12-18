import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../apis.service';
import { ComponentFactoryResolver } from '@angular/core/src/render3';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any
  display = 'none';

  constructor(private router: Router,
    private api: ApisService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder) { }

  frmEditUser: FormGroup
  submitted: false
  ngOnInit() {
    this.getUser()
    this.buildform()
  }

  buildform() {
    this.frmEditUser = this.formBuilder.group({
      _id:[''],
      fullName: ['', [Validators.required, Validators.pattern(/^(?!\s*$).+/)]],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
    })
  }
  get f() {
    return this.frmEditUser.controls
  }

  getUser() {
    this.api.getUsers(localStorage.getItem('id')).subscribe(data => {
      this.users = data['result']
    })
  }
  deleteUser(id: any) {
    this.api.deleteUser(id).subscribe(data => {
      console.log(data)
      if (data['code'] == 200) {
        this.toastr.success(data['message'])
      }
      this.getUser()
    })
  }

  open(data: any) {
    this.display = 'block';
    this.frmEditUser.controls._id.setValue(data._id)
    this.frmEditUser.controls.fullName.setValue(data.fullName)
    this.frmEditUser.controls.email.setValue(data.email)
  }

  close() {
    this.display = 'none';
  }

  update(id: any) {
    console.log("dafsd",this.frmEditUser.value)
    this.api.updateUser(this.frmEditUser.value, id).subscribe(data => {
      if (data['code'] == 200) {
        this.toastr.success(data['message'])
        this.close()
        this.getUser()
      }
      else{
        this.toastr.error(data['message'])
      }
    })
  }
}
