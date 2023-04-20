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
import {FormsModule} from "@angular/forms";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UserComponent,
    LegendDepartmentItemComponent,
    LegendComponent,
    MapEmployeeInfoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
