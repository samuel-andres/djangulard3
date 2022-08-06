import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auto } from '../models/Auto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutosService {
  API_URI = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getAutos(): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.API_URI + '/autos');
  }

  getAuto(url: string): Observable<Auto> {
    return this.http.get<Auto>(url);
  }

  postAuto(auto: Auto) {
    return this.http.post(`${this.API_URI}/autos/`, auto);
  }

  deleteAuto(url: string) {
    return this.http.delete(url);
  }

  putAuto(url: string, updatedAuto: Auto): Observable<Auto> {
    return this.http.put(url, updatedAuto);
  }
}
