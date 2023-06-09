import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AccessData } from './interface/access-data';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterData } from './interface/register-data';
import { LoginData } from './interface/login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService();
  apiUrl = environment.apiUrl;


  private authSubject = new BehaviorSubject<null | AccessData>(null);
  //l'interceptor si collega qui e rimanda o null o i dati stessi
 //behaviour li butta anche fuori i dati
 //li salvo dentro user

  user$ = this.authSubject.asObservable().subscribe;
  //col subscribe leggiamo i dati che ci sono dentro l'osservable, vediamo se l'utente è collegato o meno grazie alla riga 16,
  //oppure il pipe ma deve stare prima dell'osservable
  //con BehaviourSubject ho dati, è una scatola: o niente o gli AccessData, può esserci nulla o i dati dell'utente e grazi e a questo contenitore è possibile generare
  //(cioè asOsserbavle) come se fosse chiamata get
  //non posso aprirla a mano perché beha è una promise, vi accedo con subscribe quindi gli dico ad auth => guarda da User se c'è null oppure i dati
  //per far arrivare i dati useremo next


  isLoggedIn$ = this.user$.pipe(map(dato => !!dato))//per ogni valore che passa per favore fixa quei dati che ti passo | null mappa un booleano true o false e con il punto esclamativo
  //davanti il false diventa true cioe qualunque dato se esiste mappa TRUE CAZZO
  //il dollaro serve per capire che le variabili sono di interazione con behaviorSubject

  authLogoutTimer:any;


  constructor(
    private http: HttpClient,
    private router: Router,

  ) { }

    login(data:LoginData){
      this.http.post<AccessData>(this.apiUrl, data)
      .pipe(tap(data =>{
        this.authSubject.next(data);
        localStorage.setItem('user', JSON.stringify(data))

        const expData = this.jwtHelper
        .getTokenExpirationDate(data.accessToken) as Date;
      }),

      )
    }

  signUp(data:RegisterData){
    return this.http.post<AccessData>this.apiUrl + '/register', data)
  }
}
