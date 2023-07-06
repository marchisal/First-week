import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, ObservableInput, catchError, map, tap, throwError } from 'rxjs';
import { IAccess } from '../../interfaces/iaccess';
import { environment } from 'src/environments/environment.development';
import { ILogin } from '../../interfaces/ilogin';
import { IRegister } from '../../interfaces/iregister';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',

})
export class AuthService {

  apiUrl = environment.url
  registerUrl = this.apiUrl + '/signup'
  loginUrl = this.apiUrl + '/login'

  jwtHelper:JwtHelperService = new JwtHelperService()

  private authSubject = new BehaviorSubject<null | IAccess>(null)
  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(user => !!user));

  constructor(private http:HttpClient, private router:Router) { this.restoreUser() }


  register(utenteregistrato:IRegister){
    return this.http.post<IAccess>(this.registerUrl, utenteregistrato)
    .pipe(catchError(error => {
      if (error.status === 400) {
        alert('Attenzione, dati inseriti non corretti o incompleti');
      }
      return throwError(error);
    }))
  }

  login(data:ILogin){
    return this.http.post<IAccess>(this.loginUrl, data)
    .pipe(tap(data=> {
      this.authSubject.next(data)
      localStorage.setItem('user', JSON.stringify(data));
      /* Setto un timer di logout */
      const tempoPassato = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date
      /* uso un metodo di autologout che userá la var tempoPassato come parametro */
      this.autologout(tempoPassato)
    }))
    .pipe(catchError(error => {
      if (error.status === 400) {
        alert('I dati inseriti non sono corretti');
      }
      return throwError(error);
    }))
  }

  logout(){
    localStorage.removeItem('user');
    this.authSubject.next(null)
    this.router.navigate(['/auth/login']);
  }


  autoLogTimer!:any
  autologout(ora:Date){
    const numeroConvertito:number = ora.getTime() - new Date().getTime();
    this.autoLogTimer = setTimeout(() => {this.logout()}, numeroConvertito);
  }


  /* é un metodo che verrá utilizzato all'ngOnInit delle varie pagine che controlleranno se siamo effettivamente loggati */
restoreUser(){
  const userStringa = localStorage.getItem('user')
  if(!userStringa){
    return
  }

  const userParsato:IAccess = JSON.parse(userStringa)
  if(this.jwtHelper.isTokenExpired(userParsato.accessToken)){
    return
  }
  this.authSubject.next(userParsato)

}

}
