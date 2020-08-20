import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customer: Customer = new Customer();
  constructor(private customerService: RegisterService) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.customer);
    /*this.customerService.register(this.customer).subscribe(data =>{
      alert(JSON.stringify(data));
    })*/
  }
}

export class Customer{
  name: number;
  email: string;
  password: string;
  dob: Date;
  profilePic: File;
}