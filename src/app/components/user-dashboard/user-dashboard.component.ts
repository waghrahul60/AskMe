import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { PostModel } from 'src/app/service/post-model';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  posts: Array<PostModel> = [];

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(data =>{
      this.posts =data;
    },error=>{
      throwError(error);
    })
   }

  ngOnInit(): void {
  }

}
