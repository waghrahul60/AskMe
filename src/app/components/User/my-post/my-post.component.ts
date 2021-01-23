import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { throwError } from 'rxjs';
import { PostModel } from 'src/app/service/post-model';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.scss']
})
export class MyPostComponent implements OnInit {

  p: number = 1;
  posts: Array<PostModel> = [];
  username: string|any;

  constructor(private router: Router, private postService: PostService, 
    private localStorage:LocalStorageService) { }

  ngOnInit(): void {

    this.username = this.localStorage.retrieve('username');
    this.postService.getAllPostByUser(this.username).subscribe(data =>{
     this.posts = data;
    },error=>{
     throwError(error);
    })
  }
  goToPost(id: number): void {
    console.log("Rahul")
    this.router.navigateByUrl('/view-post/' + id);
  }
}
