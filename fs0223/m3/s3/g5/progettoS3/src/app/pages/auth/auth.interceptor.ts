import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authSvc:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return this.authSvc.user$.pipe(take(1), switchMap(user => {
      if (!user){
        return next.handle(request)
      }
      const nuovaRequest = request.clone({
        headers: request.headers.append('Authorization', `Bearer ${user.accessToken}`)
      })
      return next.handle(request)
    })
    )}
}
