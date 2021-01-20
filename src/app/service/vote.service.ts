import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VotePayload } from '../components/shared/vote-button/vote-payload';

const VOTE_URL = 'http://localhost:8080/api/votes/'


@Injectable({
  providedIn: 'root'
})
export class VoteService {


  
  constructor(private httpClient:HttpClient) { }
  

  vote(votePayload:VotePayload): Observable<any>{
    return this.httpClient.post(VOTE_URL,votePayload);
  }
}
