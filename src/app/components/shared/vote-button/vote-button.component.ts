

import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { PostModel } from 'src/app/service/post-model';
import { PostService } from 'src/app/service/post.service';
import { VoteService } from 'src/app/service/vote.service';
import { VotePayload } from './vote-payload';
import { VoteType } from './vote-type';



@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.scss']
})
export class VoteButtonComponent implements OnInit {


  @Input() post:PostModel | any;
  votePayload: VotePayload | any;
  isLoggedIn: boolean | any;
  upVoteColour:string|any;
  downVoteColour:string|any;
  upVote:boolean|any;
  downVote:boolean|any;


  constructor(private voteService: VoteService,
              private authService: AuthService,
              private postService: PostService, 
              private toastr: ToastrService
    ) { 
      this.votePayload = {
        VoteType: '',
        postId: ''
        
      }
      this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn =  data)
    }

  ngOnInit(): void {
    this.updateVoteDetails();
  }

  upvotePost(){
    this.votePayload.voteType = VoteType.UPVOTE;
    this.vote();
    this.downVoteColour ='';
    
  }
  downvotePost(){
    this.votePayload.voteType = VoteType.DOWNVOTE;
    this.vote();
    this.upVoteColour='';
   
  }

  private vote(){
    this.votePayload.postId = this.post.id;
    this.voteService.vote(this.votePayload).subscribe(() =>{
      this.updateVoteDetails();
      this.toastr.success("vote added");
    },error=>{
      throwError(error);
      this.toastr.error(error.error.message);
    });
  }

  private updateVoteDetails(){
    this.postService.getPost(this.post.id).subscribe(post =>{
      this.post = post;
    });
  }

 
}
