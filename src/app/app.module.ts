import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { LegendDepartmentItemComponent } from './components/legend-department-item/legend-department-item.component';
import { MapEmployeeInfoComponent } from './components/map-employee-info/map-employee-info.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {AUTH_API_URL, OFFICE_API_URL} from "./app-injection-tokens";
import {environment} from "../environments/environment";
import {JwtModule} from "@auth0/angular-jwt";
import {ACCESS_TOKEN_KEY} from "./services/login.service";
import { ChangePasswordPageComponent } from './pages/change-password-page/change-password-page.component';

export function tokenGetter() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    LegendDepartmentItemComponent,
    MapEmployeeInfoComponent,
    LoginPageComponent,
    MainPageComponent,
    NavigationComponent,
    ChangePasswordPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,

        JwtModule.forRoot({
          config: {
            tokenGetter,
            allowedDomains: environment.tokenWhiteListedDomains
          }
        })
    ],
  providers: [{
    provide: AUTH_API_URL,
    useValue: environment.authApi
  },
    {
    provide: OFFICE_API_URL,
    useValue: environment.officeApi
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
