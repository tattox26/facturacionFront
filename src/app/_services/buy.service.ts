import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buy } from '../models/buy.model';


const baseUrl = 'http://localhost:8000/api/factura';

@Injectable({
  providedIn: 'root'
})
export class BuyService {
  constructor(private http: HttpClient) { }

  
  read(): Observable<Buy[]> {
    return this.http.get<Buy[]>(`${baseUrl}/read`);
  }

  get(id: any): Observable<Buy> {
    return this.http.get(`${baseUrl}/get/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/store`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Buy[]> {
    return this.http.get<Buy[]>(`${baseUrl}?title=${title}`);
  }
}
