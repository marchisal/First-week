import { Component, OnInit } from '@angular/core';
import { ICosmetic } from 'src/app/interfaces/icosmetic';
import { IUser } from 'src/app/interfaces/iuser';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 cosmetico:ICosmetic[] = []
 user:IUser = {
  id:0,
  email:'',
  name: '',
  surname: ''
 }

 constructor (private homeSvc:HomeService){}

 ngOnInit() {
   this.homeSvc.get().subscribe((res) => {this.cosmetico = res})
 }
 delete(id:number){
  this.homeSvc.delete(id).subscribe((res) =>{
    let index = this.cosmetico.findIndex(el => el.id === id)
    this.cosmetico.splice(index, 1)
  })
 }




}
