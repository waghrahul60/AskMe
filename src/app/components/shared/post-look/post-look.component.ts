import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { PostModel } from 'src/app/service/post-model';
import { PostService } from 'src/app/service/post.service';


@Component({
  selector: 'app-post-look',
  templateUrl: './post-look.component.html',
  styleUrls: ['./post-look.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostLookComponent implements OnInit {
  p: number = 1;
 
  posts: Array<PostModel> = [];


  //faComments = faComments;
 // @Input() posts: PostModel[] | any;
  constructor(private router: Router, private postService: PostService) { 
    this.postService.getAllPosts().subscribe(data =>{
      this.posts =data;
    },error=>{
      throwError(error);
    })
  }

  ngOnInit(): void {
  }
  goToPost(id: number): void {
    console.log("Rahul")
    this.router.navigateByUrl('/view-post/' + id);
  }

}
