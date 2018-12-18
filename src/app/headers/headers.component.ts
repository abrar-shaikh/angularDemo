import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  url:string
  constructor(private route:Router) { }

  ngOnInit() {
    this.url = this.route.url
  }
  logout(){
    localStorage.removeItem('id')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    this.route.navigate([''])
  }
  profile(){
    this.route.navigate(['editProfile'])
  }
  home(){
    this.route.navigate(['users'])
  }
}
