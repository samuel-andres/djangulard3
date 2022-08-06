import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marca } from '../models/Marca';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarcasService {
  API_URI = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.API_URI + '/marcas');
  }
}
