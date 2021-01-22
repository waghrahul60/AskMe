import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-webstorage';
import { throwError } from 'rxjs';

import { PostModel } from 'src/app/service/post-model';
import { PostService } from 'src/app/service/post.service';
import { CommentPayload } from '../../comments/comment-payload';
import { CommentResponse } from '../../comments/comment-response';
import { CommentService } from '../../comments/comment.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {


  postId: number | any;
  post: PostModel  | any; 
  commentForm: FormGroup | any;
  commentPayload : CommentPayload| any;
  comments: CommentPayload[] | any;
  deleteButton:boolean|any;
  commentRes:CommentResponse[]|any;


  constructor(private postService:PostService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private commentService:CommentService,
    private localStorage:LocalStorageService,
    private toster: ToastrService) {

    this.postId = this.activateRoute.snapshot.params.id;
      
      

      this.commentForm = new FormGroup({
        text: new FormControl('')
      });
      this.commentPayload = {
        text:'parbancha pratik',
        postId: this.postId,
        username: 'rahul123'
      }
      
     }

  ngOnInit(): void {
   
    this.getPostById();
    this.getCommentForPost();
    this.deleteButton = true;
    
    
    if(this.commentRes.username === this.localStorage.retrieve('username')){
     
      this.toster.warning(this.localStorage.retrieve('username'));
    }
  }

  private getPostById(){
      this.postService.getPost(this.postId).subscribe(data =>{
        this.post = data;
     
      },error =>{
        throwError(error);
      });
  }
  postComment(){
   
    this.commentPayload.text = this.commentForm.get('text').value;
    // console.log(this.commentPayload);

    // this.commentService.postComment(this.commentPayload).pipe(map(data =>{
     
    //   this.getCommentForPost();
    // },(error: any) => {
    //   throwError(error);
    // }));

     this.commentService.postComment(this.commentPayload).subscribe(()=>{
       this.getCommentForPost();
     },(error =>{
       throwError(error);
     }));
  }

  getCommentForPost(){
    this.commentService.getAllCommentForPost(this.postId).subscribe(data=>{
      console.log('Data = ',data);
      this.commentRes = data;
      console.log("judsjhgfiudsk=",this.commentRes);
    },error=>{
      throwError(error);
    });
  }

  deleteComment(para:any){
   var id = this.localStorage.retrieve('id');
    this.commentService.deleteCommentById(para,id).subscribe((data)=>{
      if(data){
        this.toster.success("Comment Deleted!!!!");
      }else{
        this.toster.warning("Can not delete Other's Comment");
      }
      this.getCommentForPost();
    },error=>{
      throwError(error);
    })
  }
}
