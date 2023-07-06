import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICosmetic } from 'src/app/interfaces/icosmetic';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl:string = environment.url

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<ICosmetic[]>(this.apiUrl)
  }


  getOne(id:number){
    return this.http.get<ICosmetic>(this.apiUrl + '/' + id)
  }

  post(e:ICosmetic){
    return this.http.post<ICosmetic>(this.apiUrl, e)

  }

  put(e:ICosmetic){
    return this.http.put<ICosmetic>(this.apiUrl + '/' + e.id, e)
  }

  delete(id:number){
    return this.http.delete<ICosmetic>(this.apiUrl + '/' + id)
  }
}
