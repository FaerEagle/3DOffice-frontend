import {Component} from '@angular/core';
import {LoginService} from "./services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public get isLoggedIn(): boolean {
    return this.as.isAuth()
  }

  constructor(private as: LoginService, private router: Router) {
  }

  login(nameUser: string, email: string, password: string) {
    this.as.loginN(nameUser, email, password)
      .subscribe(res => {
        this.router.navigate([''])
      }, error => {
        alert('Неправильно введены данные')
      })
  }

  logout() {
    this.as.logout()
  }

}
