import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { SignupRequestPayload } from './signup-request-payload';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupRequestPayload: SignupRequestPayload | any;
  signupForm: UntypedFormGroup | any;
  errorMessage:''|any;
  isSuccessful = false;
  isSignUpFailed = false;
  
  constructor(private authService:AuthService,
              private router: Router,
              private toastr: ToastrService) {
                this.signupRequestPayload = {
                  firstName:'',
                  lastName:'',
                  username: '',
                  email: '',
                  whoAreYou:'',
                  password:''
                };
   }

  firstNameFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.pattern(`^[a-zA-Z]+([a-zA-Z])$`),
    Validators.minLength(3),
    Validators.maxLength(30),
  ])
  lastNameFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.pattern(`^[a-zA-Z]+([a-zA-Z])$`),
    Validators.minLength(3),
    Validators.maxLength(30),
  ])
  usernameFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.pattern(`^[a-zA-Z]+([._]?[a-zA-Z0-9]+)$`),
    Validators.minLength(3),
    Validators.maxLength(10),
  ])
  emailFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
  ])
  passwordFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.pattern(`^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$`),
    Validators.minLength(3),
    Validators.maxLength(32),
  ])
  whoAreYou = new UntypedFormControl('', [ Validators.required,])

  confirmpasswordFormControl = new UntypedFormControl('');


  
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
   
   
  }
  signup(){
    console.log('from data',this.usernameFormControl.value,this.firstNameFormControl.value);
     this.signupRequestPayload.firstName = this.firstNameFormControl.value;
     this.signupRequestPayload.lastName = this.lastNameFormControl.value;
     this.signupRequestPayload.email = this.emailFormControl.value;
     this.signupRequestPayload.username = this.usernameFormControl.value;
     this.signupRequestPayload.password = this.passwordFormControl.value;
     this.signupRequestPayload.whoAreYou = this.whoAreYou.value;

    //  if(this.passwordFormControl.value == this.confirmpasswordFormControl.value){

    //  }

    console.log("signup form = ",this.signupForm);
    console.log("signup form  payload= ",this.signupRequestPayload);

    this.authService.signup(this.signupRequestPayload)
    .subscribe(data =>{
      this.isSuccessful =  true;
      this.isSignUpFailed = true;
      this.router.navigate(['/login'],
      { queryParams: { registered: 'true' } }
      );
    }, err => {
      console.log(err.error);
      this.toastr.error('Registration Failed!!!!!!!!!!! Please try again')
      this.isSignUpFailed = true;
    })

  }
}