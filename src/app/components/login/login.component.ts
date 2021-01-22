
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { LoginRequestPayload } from './login-request.payload';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;
  loginRequestPayload:LoginRequestPayload | any;
  isError: boolean | undefined;
  registerSuccessMessage: string | any;

  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("")
  ])
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();
 

  constructor(private authService:AuthService,
              private router: Router,
              private toastr: ToastrService,
              private activatedRoute: ActivatedRoute) { 
                this.loginRequestPayload = {
                    username:'',
                    password:''
                }
              }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => 
      {
        if(params.registered !== undefined && params.registered === 'true'){
        this.toastr.success('signup Successful');
        this.registerSuccessMessage = 'Please Check your inbox for activation email '
          + 'activate your account before you Login!';
      }
    });
  }

  

  login(){
    this.loginRequestPayload.username = this.usernameFormControl.value;
    this.loginRequestPayload.password = this.passwordFormControl.value;

    console.log("Form ele ",this.loginRequestPayload);

    this.authService.login(this.loginRequestPayload).subscribe((data: any) => {
      this.isError = false;
      this.router.navigateByUrl('/user');
      this.toastr.success('Login Successful');

     
    },(error: any) => {
        this.isError = true;
        throwError(error);
    })
  }

}
