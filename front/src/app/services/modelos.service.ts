import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modelo } from '../models/Modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {
  API_URI = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getModelos(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(this.API_URI + '/modelos');
  }
}
