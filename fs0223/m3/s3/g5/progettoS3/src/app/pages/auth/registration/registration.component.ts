import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegister } from 'src/app/interfaces/iregister';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  email = new FormControl ('', [Validators.required, Validators.email])
  password = new FormControl ('', [Validators.required, Validators.minLength(3)])

  dati: IRegister = {
    email: '',
    password: '',
    name: '',
    surname: ''
  }

  constructor(private authSvc:AuthService, private router:Router){}

  signup(){
    this.authSvc.register(this.dati).subscribe((res) => {
      this.router.navigate(['./auth/login'])
    })
  }
}
