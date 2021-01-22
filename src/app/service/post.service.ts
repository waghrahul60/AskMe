import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePostPayload } from '../components/Post/create-post/create-post.payload';
import { PostModel } from './post-model';


const POST_URL = "http://localhost:8080/api/posts/";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  getAllPosts(): Observable<Array<PostModel>> {
    return this.httpClient.get<Array<PostModel>>(POST_URL);
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.httpClient.post(POST_URL, postPayload);
  }

  getPost(id: number):Observable<PostModel> {
    return this.httpClient.get<PostModel>(POST_URL+ id);
  }

  getAllPostByUser(name: string):Observable<Array<PostModel>> {
    return this.httpClient.get<Array<PostModel>>(POST_URL + "by-user/"+name);
  }

  getPostBySubquery(id: number): Observable<Array<PostModel>> {
    return this.httpClient.get<Array<PostModel>>(POST_URL+"by-subquery/"+id);
  }
}
