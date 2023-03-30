import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {IUser} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getUser(): Observable<IUser> {
    return this.http.get<IUser>('https://localhost:7223/api/User/2')
  }
}
