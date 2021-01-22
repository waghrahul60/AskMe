import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentPayload } from './comment-payload';
import { CommentResponse } from './comment-response';

const COMMENT_URL = 'http://localhost:8080/api/comments/';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }

  getAllCommentForPost(postId: number): Observable<CommentPayload[]>{
    return this.httpClient.get<CommentPayload[]>(COMMENT_URL+'by-post/'+postId);
  }

  postComment(commentPayload: CommentPayload): Observable<any>{
    return this.httpClient.post<any>(COMMENT_URL, commentPayload);
  }

  getAllCommentByUser(username: string): Observable<CommentResponse>{
    return this.httpClient.get<CommentResponse>(COMMENT_URL+'by-user/'+username);
  }

  deleteCommentById(id: number, userId:number):Observable<any>{
    return this.httpClient.get<any>(COMMENT_URL + "delete/" +id +'/'+userId);
  }
}
