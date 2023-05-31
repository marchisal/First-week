import { Component } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent {
  
  constructor(private userSvc:UserService){
    this.userSvc.getAllUsers().then(user=>)
  }

}
