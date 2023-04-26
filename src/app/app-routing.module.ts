import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {AuthGuard} from "./guards/auth.guard";
import {ChangePasswordPageComponent} from "./pages/change-password-page/change-password-page.component";

export const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '', component: MainPageComponent, canActivate: [AuthGuard]},
  {path: 'changepassword', component: ChangePasswordPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
