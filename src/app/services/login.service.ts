import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, tap} from "rxjs";
import {Token} from "../models/token";
import {JwtHelperService} from "@auth0/angular-jwt";
import {AUTH_API_URL} from "../app-injection-tokens";

export const ACCESS_TOKEN_KEY = 'office_access_token';
let inputValue: string;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService,
    @Inject(AUTH_API_URL) private apiUrl: string
  ) { }

  login(nameUser: string, email: string, password: string):Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}login`, {
      nameUser, email, password
    }).pipe(
      tap(token => {
        localStorage.setItem(ACCESS_TOKEN_KEY, token.access_token);
      })
    )
  }

  isAuth(): boolean {
    let token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return <boolean><unknown>token && !this.jwtHelper.isTokenExpired(token)
  }

  logout(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.router.navigate(['login']);
  }

  onKey(event: any) {
    inputValue = event.target.value;
  }

  sendOnEmail() {
    let email = inputValue;
    console.log(email);
    let params = new HttpParams();
    params = params.append('email', email);

    return this.http.get(`https://localhost:7241/send-email`, {
      params: params,
      responseType: 'text'
    });
  }
}
