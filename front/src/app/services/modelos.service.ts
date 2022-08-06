import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modelo } from '../models/Modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModelosService {
  API_URI = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getModelos(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(this.API_URI + '/modelos');
  }

  getModelo(url: string): Observable<Modelo> {
    return this.http.get<Modelo>(url);
  }

  deleteModelo(url: string) {
    return this.http.delete(url);
  }

  putModelo(url: string, updatedModelo: Modelo): Observable<Modelo> {
    return this.http.put<Modelo>(url, updatedModelo);
  }

  postModelo(modelo: Modelo) {
    return this.http.post(`${this.API_URI}/modelos/`, modelo);
  }
}
