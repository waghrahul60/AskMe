import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AllUserService } from 'src/app/service/all-user.service';
import { AuthService } from 'src/app/service/auth.service';
import { ForgotRequestPayload } from './forgot-password-payload';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotRequestPayload:ForgotRequestPayload|any;
  emailId:string|any;

  constructor(private authService:AuthService,
    private allUserService:AllUserService,
    private router: Router,
    private toastr: ToastrService) { 
      this.forgotRequestPayload = {
        email: '',
      };
    }


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ])
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }


  forgotPassword(){
    this.emailId = this.emailFormControl.value;

    this.allUserService.emailExist(this.emailId).subscribe(()=>{
      this.toastr.success("Email Found!!");
    },error=>{
      this.toastr.error(error.error.message);
    })


  }



}
