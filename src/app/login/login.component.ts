import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/authentication-service.service'
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor( public authService : AuthService , private router: Router) { }

  ngOnInit() {
  }
   

register()
{
  this.authService.doRegister({"email":"abc@gmail.com","password":"hgghhg"});
}
login()
{
  this.authService.doLogin({});
}

loginWithGoogle()
  {  
this.authService.doGoogleLogin()
.then(res => {
  this.router.navigate(['/user']);
})
  }
}


