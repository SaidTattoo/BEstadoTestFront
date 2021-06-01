import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http : HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get('http://localhost:3000/api/usuarios')
  }
}
