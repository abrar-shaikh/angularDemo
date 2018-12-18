import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ApisService } from '../apis.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private apis: ApisService,
    private toaster: ToastrService,
    private router: Router) { }
  frmEditProfile: FormGroup
  submitted = false;

  name = localStorage.getItem('name')
  email = localStorage.getItem('email')
  ngOnInit() {
    this.frmEditProfile = this.formBuilder.group({
      fullName: [this.name, Validators.required],
      email: [this.email, [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]]
    })
  }
  get f() {
    return this.frmEditProfile.controls
  }
  submit() {

    this.submitted = true
    if (this.frmEditProfile.invalid) {
      return
    }
    else {
      this.apis.updateUser(this.frmEditProfile.value,localStorage.getItem('id')).subscribe(data => {
        if (data['code'] == 200) {
          console.log(data)
          localStorage.setItem('name',data['result']['fullName'])
          localStorage.setItem('email',data['result']['email'])
          this.toaster.success(data['message'])
          this.router.navigate(['users'])
        }
        else{
          this.toaster.error(data['message'])
        }
      })
    }
  }
}
