import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequestPayload } from '../components/login/login-request.payload';
import { LoginResponse } from '../components/login/login-response.payload';
import { SignupRequestPayload } from '../components/register/signup-request-payload';
import { LocalStorageService } from 'ngx-webstorage';
import { map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

const AUTH_API =  'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();
  
  refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    username: this.getUserName()
  }

  constructor(private httpClient:HttpClient,
              private localStorage:LocalStorageService ) { }
  
  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.httpClient.post(AUTH_API + 'signup', signupRequestPayload, { responseType: 'text' });
  }

  login(loginRequestPayload:LoginRequestPayload):Observable<any>{
    return this.httpClient.post<LoginResponse>(AUTH_API + 'login',
        loginRequestPayload).pipe(map((data) =>{
          this.localStorage.store('authenticationToken',data.authenticationToken);
          this.localStorage.store('refreshToken',data.refreshToken);
          this.localStorage.store('expiresAt',data.expiresAt);
          this.localStorage.store('username',data.username);
          this.localStorage.store('roles',data.roles[0]);
          this.localStorage.store('id',data.id);

         
          this.loggedIn.emit(true);
          this.username.emit(data.username);
        }));

  } 
  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }

  refreshToken() {
    const refreshTokenPayload = {
      refreshToken: this.getRefreshToken(),
      username: this.getUserName()
    }
   

    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/refresh/token',
      refreshTokenPayload)
      .pipe(tap(response => {
        this.localStorage.clear('authenticationToken');
        this.localStorage.clear('expiresAt');
        console.log(response);

        this.localStorage.store('authenticationToken', response.authenticationToken);
        this.localStorage.store('expiresAt', response.expiresAt);
      }));
  }
  

  // refreshTokenPayload<T>(arg0: string, refreshTokenPayload: any) {
  //   throw new Error('Method not implemented.');
  // }

  getUserName() {
    return this.localStorage.retrieve('username');
  }
  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }

  getUserRole(){
    let r = this.localStorage.retrieve('roles');
    return r.name;
  } 

  logout() {
    this.httpClient.post(AUTH_API + 'logout', this.refreshTokenPayload,{ responseType: 'text' })
      .subscribe(data => {
        console.log(data);
      }, error => {
        throwError(error);
      })
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('username');
    this.localStorage.clear('refreshToken');
    this.localStorage.clear('expiresAt');
    this.localStorage.clear('roles');
  }
}
