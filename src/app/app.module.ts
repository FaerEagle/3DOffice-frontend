import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductComponent} from "./components/product/product.component";
import {UserComponent} from "./components/user.component";
import { LegendDepartmentItemComponent } from './components/legend-department-item/legend-department-item.component';
import { LegendComponent } from './components/legend/legend.component';
import { MapEmployeeInfoComponent } from './components/map-employee-info/map-employee-info.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {AUTH_API_URL, OFFICE_API_URL} from "./app-injection-tokens";
import {environment} from "../environments/environment";
import {JwtModule} from "@auth0/angular-jwt";
import {ACCESS_TOKEN_KEY} from "./services/login.service";

export function tokenGetter() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UserComponent,
    LegendDepartmentItemComponent,
    LegendComponent,
    MapEmployeeInfoComponent,
    NavigationComponent,
    LoginPageComponent,
    MainPageComponent
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
