import { AboutModel } from './../../models/about';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AboutService {
  private apiUrl = 'http://localhost:5000/api/about';

  constructor(private http: HttpClient) {}

  getAbout(): Observable<AboutModel> {
    return this.http.get<AboutModel>(this.apiUrl);
  }

  updateAbout(data: Partial<AboutModel>): Observable<{ message: string; about: AboutModel }> {
    return this.http.put<{ message: string; about: AboutModel }>(this.apiUrl, data);
  }
}