
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { PostModel } from 'src/app/service/post-model';
import { PostService } from 'src/app/service/post.service';
import { SubqueryModel } from 'src/app/service/subquery-model';
import { SubqueryService } from 'src/app/service/subquery.service';

@Component({
  selector: 'app-view-subquery',
  templateUrl: './view-subquery.component.html',
  styleUrls: ['./view-subquery.component.scss']
})
export class ViewSubqueryComponent implements OnInit {

  subqueryId: number | any;
  subquery:SubqueryModel | any;
  posts: Array<PostModel> = [];

  constructor(private subqueryService:SubqueryService,
    private toastr: ToastrService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private postService: PostService) { 
      this.subqueryId = this.activateRoute.snapshot.params.id;
    
  }

  ngOnInit(): void {
    this.subqueryService.getSubqueryById(this.subqueryId).subscribe(data=>{
      this.subquery = data;
      this.toastr.success('data resived');
    },error=>{
      throwError(error);
      this.toastr.error('flsjkhg');
    })

    this.getPostsBySubquery();
   
  }

  getPostsBySubquery(){
    this.postService.getPostBySubquery(this.subqueryId).subscribe(data=>{
      this.posts = data;
      this.toastr.success('post data resived');
    },error=>{
      throwError(error);
      this.toastr.error( "post error");
    })
  }

  goToPost(id: number): void {
    console.log("Rahul")
    this.router.navigateByUrl('/view-post/' + id);
  }
}
