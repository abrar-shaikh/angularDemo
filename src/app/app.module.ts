import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApisService } from './apis.service'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomepageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
}),
    BrowserAnimationsModule
  ],
  providers: [ApisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
