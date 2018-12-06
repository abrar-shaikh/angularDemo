import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApisService } from '../apis.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  submitted = false;
  match = false;
  constructor(private router: Router, private formBuilder: FormBuilder,private api:ApisService,private toastr: ToastrService) { }
  frmSignup: FormGroup
  ngOnInit() {
    this.frmSignup = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/^(?!\s*$).+/)]],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-z])(?=.*[0-9])(?=.*[@#$_-])\S{8,20}$/)]],
      txtConfirmPassword: [''],
      gender: ['', Validators.required],
    })
  }

  get f() {
    return this.frmSignup.controls
  }

  submit() {
    this.submitted = true
    if (this.frmSignup.invalid) {
      if (this.frmSignup.controls.password.value === this.frmSignup.controls.txtConfirmPassword.value) {
        this.match = true;
      }
      else {
        this.match = false
      }
      return
    }
    else {
      this.match = true
      this.api.registerUser(this.frmSignup.value).subscribe(data=>{
        if(data['code'] == 201){
          this.toastr.success(data['message']);
          this.router.navigate([''])

        }
        else{
          this.toastr.error(data['message']);
          console.log(data)
        }
      })
    }
  }

  reset() {
    this.submitted = false
  }
}
