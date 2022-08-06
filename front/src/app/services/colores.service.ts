import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from '../models/Color';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColoresService {
  API_URI = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getColores(): Observable<Color[]> {
    return this.http.get<Color[]>(this.API_URI + '/colores');
  }
  
}
