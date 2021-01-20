import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';

import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { AuthService } from './app/service/auth.service';
import { LoginResponse } from './app/components/login/login-response.payload';

@Injectable({
    providedIn: 'root'
})

export class TokenInterceptor implements HttpInterceptor {

    isTokenRefreshing = false;
    refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(public authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        
       
    const jwtToken = this.authService.getJwtToken();
        console.log(jwtToken);
        if (jwtToken) {
            this.addToken(req,jwtToken);
         }
         return next.handle(req).pipe(catchError(error => {
             if(error instanceof HttpErrorResponse && error.status === 403)
             {
                 return this.handleAuthErrors(req,next);
             }else{
                 return throwError(error);
             }
         }))
      
    }

    addToken(req: HttpRequest<any>, jwtToken: any) {
        return req.clone({
            headers: req.headers.set('Authorization','Bearer' + jwtToken)
        });
    }

    private handleAuthErrors(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        if (!this.isTokenRefreshing) {
            this.isTokenRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this.authService.refreshToken().pipe(
                switchMap((refreshTokenResponse: LoginResponse) => {
                    this.isTokenRefreshing = false;
                    this.refreshTokenSubject
                        .next(refreshTokenResponse.authenticationToken);
                    return next.handle(this.addToken(req,
                        refreshTokenResponse.authenticationToken));
                })
            )
        } else {
            return this.refreshTokenSubject.pipe(
                filter(result => result !== null),
                take(1),
                switchMap((res) => {
                    return next.handle(this.addToken(req,
                        this.authService.getJwtToken()))
                })
            );
        }
    }
   
}