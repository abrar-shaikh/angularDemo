import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApisService } from '../apis.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private api: ApisService,
    private toastr: ToastrService) { }


  submitted = false;
  frmLogin: FormGroup
  ngOnInit() {
    this.frmLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-z])(?=.*[0-9])(?=.*[@#$_-])\S{8,20}$/)]]
    })
  }

  get f() {
    return this.frmLogin.controls;
  }
  submit() {
    this.submitted = true;
    if (this.frmLogin.invalid) {
      return;
    }
    else {
      console.log('valid')
      this.api.authenticateUser(this.frmLogin.value).subscribe(data => {
        if (data['code'] == 200) {
          this.toastr.success(data['message'])
        } else {
          this.toastr.error(data['message'])
        }
      })
      //this.router.navigate[()]
    }
  }
  reset() {
    console.log('reset')
    this.submitted = false
  }
}
