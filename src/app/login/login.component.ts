import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service'
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor( public authService : AuthenticationServiceService , private router: Router) { }

  ngOnInit() {
  }
   user : any
  loginWithGoogle()
  {
    this.user = this.authService.doGoogleLogin().then(res =>  {
      this.router.navigate(['/user']);
    })
  }
    
  }


