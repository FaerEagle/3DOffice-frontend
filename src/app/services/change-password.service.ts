import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private http: HttpClient) { }

  changePassword(password: string, confirmPassword: string) {
    let findStr = "reset_hash=";
    let resetHashPos = document.documentURI.indexOf(findStr) + findStr.length;
    let resetHash = document.documentURI.slice(resetHashPos);

    return this.http.post(`https://localhost:7241/reset-password`, {resetHash, password, confirmPassword},
      {
        responseType: 'text'
      });
  }
}
