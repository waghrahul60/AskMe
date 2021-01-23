import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-webstorage';
import { throwError } from 'rxjs';
import { CommentResponse } from '../../comments/comment-response';
import { CommentService } from '../../comments/comment.service';

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.component.html',
  styleUrls: ['./my-comments.component.scss']
})
export class MyCommentsComponent implements OnInit {

  p: number = 1;

  commentResponse: CommentResponse[] | any;
  comment: Array<CommentResponse> = [];
  username: string | any;
  deleteButton: boolean | any;

  constructor(private router: Router, private commentService: CommentService,
    private localStorage: LocalStorageService, private toster: ToastrService) { }

  ngOnInit(): void {
    this.deleteButton = true;
    this.getCommentsByUserName();

  }

  deleteComment(para: any) {
    var id = this.localStorage.retrieve('id');
    this.commentService.deleteCommentById(para, id).subscribe((data) => {
      if (data) {
        this.toster.success("Comment Deleted!!!!");
      } else {
        this.toster.warning("Can not delete Other's Comment");
      }
      this.getCommentsByUserName();
    }, error => {
      throwError(error);
    })
  }

  getCommentsByUserName() {
    this.username = this.localStorage.retrieve('username');
    this.commentService.getAllCommentByUser(this.username).subscribe(data => {
      this.commentResponse = data;
    }, error => {
      throwError(error);
    })
  }

}
