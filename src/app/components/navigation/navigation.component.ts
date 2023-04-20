import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private router: Router, public loginService: LoginService) {
  }

  isAuth(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout() {
    localStorage.removeItem('token');
    console.log(localStorage.getItem('token'));
    this.router.navigateByUrl('login');
  }

}
