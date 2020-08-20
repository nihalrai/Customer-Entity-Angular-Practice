import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDto: LoginDto = new LoginDto();
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.loginService.login(this.loginDto).subscribe(data =>{
      alert(JSON.stringify(data));
      if(data.status == 'SUCCESS'){
        let id = data.customerId;
        let name = data.name;

        sessionStorage.setItem('customerId', id);
        sessionStorage.setItem('customerName', name);
        this.router.navigate(['dashboard']);
      }
    })
  }
}

export class LoginDto{
  email: string;
  password: string;
}
