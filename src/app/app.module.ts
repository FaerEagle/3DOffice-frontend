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
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
