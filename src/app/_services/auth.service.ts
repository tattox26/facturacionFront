import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8000/api/factura/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions);
  }

  register(name: string, email: string, password: string, password_confirmation: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      name,
      email,
      password,
      password_confirmation
    }, httpOptions);
  }

  user(): Observable<any> {
    return this.http.get(AUTH_API + 'user', httpOptions);
  }
}
