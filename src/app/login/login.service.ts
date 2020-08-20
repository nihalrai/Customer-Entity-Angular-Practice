import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDto } from './login.component';

@Injectable({
    providedIn: 'root'
  })

export class LoginService {


    constructor(private http: HttpClient) { }

    login(loginDto){
        const url="http://localhost:8585/login";
        const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', 'Accept': 'application/json'});
        return this.http.post<LoginDto>(url, loginDto, {headers: headers});
    }
}