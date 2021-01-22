import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AllUserService } from 'src/app/service/all-user.service';
import { AuthService } from 'src/app/service/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOTPComponent implements OnInit {

  constructor(private authService:AuthService,
    private allUserService:AllUserService,
    private router: Router,
    private toastr: ToastrService) { }


    otpormControl = new FormControl('', [
      Validators.required
      
    ])
    matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }

  verifyOtp(){
    
  }

}
