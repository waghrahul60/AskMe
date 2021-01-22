import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../components/shared/all-users/user-model';

const USER_URL = "http://localhost:8080/api/user/";


@Injectable({
  providedIn: 'root'
})
export class AllUserService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers(): Observable<Array<UserModel>> {
    return this.httpClient.get<Array<UserModel>>(USER_URL+'all');
  }


}
