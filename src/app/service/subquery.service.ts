import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { SubqueryModel } from './subquery-model';


const SUBQUERY_URL = 'http://localhost:8080/api/subquery/'

@Injectable({
  providedIn: 'root'
})
export class SubqueryService {

  constructor(private httpClient:HttpClient,
    public authService: AuthService,
    private localStorage:LocalStorageService) { }


  getAllSubqueries(): Observable<Array<SubqueryModel>>{
    debugger;
    const jwtToken = this.localStorage.retrieve('authenticationToken');

    var h = new HttpHeaders();
    h.append('Content-Type', 'application/json');
    h.append("Authorization", "Bearer " + jwtToken);
    const httpOptions = {
      headers: h
    };
    return this.httpClient.get<Array<SubqueryModel>>('http://localhost:8080/api/subquery/',httpOptions);
  }

  createSubqueries(subqueryModel :SubqueryModel): Observable<SubqueryModel>{
    return this.httpClient.post<SubqueryModel>(SUBQUERY_URL,subqueryModel);
  }

  getSubqueryById(id:number): Observable<SubqueryModel> {
    return this.httpClient.get<SubqueryModel>(SUBQUERY_URL + id);
  }
}
