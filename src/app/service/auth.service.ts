import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {

    private _registerUrl = "http://localhost:8000/api/user";
    private _loginUrl = "http://localhost:8000/api/login_check";
    constructor(private http: HttpClient ) {
    }
    registerUser(user) {
        return this.http.post<any>(this._registerUrl, user)
    }
    loginUser(user) {
        return this.http.post<any>(this._loginUrl, user)
    }
    
}

