
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { PostService } from 'src/app/service/post.service';
import { SubqueryModel } from 'src/app/service/subquery-model';
import { SubqueryService } from 'src/app/service/subquery.service';
import { CreatePostPayload } from './create-post.payload';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})


export class CreatePostComponent implements OnInit {

  

  postPayload: CreatePostPayload | any;
  subquery: Array<SubqueryModel> | any; 

 
  titleFormControl = new FormControl('', [
    Validators.required,
   
  ])
  urlFormControl = new FormControl('', [
   
  ]);
  subQueryFormControl = new FormControl('', [
    Validators.required,
  ]);
  descriptionFormControl=new FormControl('', [
   
  ]);
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, 
              private postService: PostService,
              private subqueryService:SubqueryService,
              private toastr: ToastrService,) { 
                this.postPayload ={
                  postName:'',
                  url:'',
                  description:'',
                  subqueryName:'',
                }
              }

  ngOnInit(): void {
    this.subqueryService.getAllSubqueries().subscribe(data =>{
      this.subquery = data;
    },error =>{
      throwError(error);
    })
  }

  createPost(){
    this.postPayload.postName = this.titleFormControl.value;
    this.postPayload.url = this.urlFormControl.value;
    this.postPayload.subqueryName = this.subQueryFormControl.value;
    this.postPayload.description = this.descriptionFormControl.value;

    this.postService.createPost(this.postPayload).subscribe(data=>{
      this.router.navigateByUrl('/user');
      this.toastr.success("Question Created");
    },error =>{
      throwError(error);
      this.toastr.warning("Data not found!!!!");
    })
  }

  discardPost(){
    this.router.navigateByUrl('/user')
  }



}
