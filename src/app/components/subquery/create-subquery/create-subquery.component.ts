
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm,Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { SubqueryModel } from 'src/app/service/subquery-model';
import { SubqueryService } from 'src/app/service/subquery.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-subquery',
  templateUrl: './create-subquery.component.html',
  styleUrls: ['./create-subquery.component.scss']
})


export class CreateSubqueryComponent implements OnInit {

  subqueryModel:SubqueryModel | any;


  subqueryFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("")
  ])
  descFormControl = new FormControl('', [
    Validators.required,
  ]);
  
  matcher = new MyErrorStateMatcher();

  constructor(private subqueryService:SubqueryService,
              private router:Router) { 
    this.subqueryModel = {
      name: '',
      description: ''
    }
 
  }

  ngOnInit(): void {
  }

  createSubquery(){
    this.subqueryModel.name = this.subqueryFormControl.value;
    this.subqueryModel.description = this.descFormControl.value;

    this.subqueryService.createSubqueries(this.subqueryModel).subscribe(data =>{
      this.router.navigateByUrl('/list-subquery');
    },error =>{
      throwError(error);
    })

  }

}
