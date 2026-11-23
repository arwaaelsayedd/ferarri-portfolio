import { HomeModel } from './../../models/home';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeService {
  private apiUrl = 'http://localhost:5000/api/home';

  constructor(private http: HttpClient) {}

  getHome(): Observable<HomeModel> {
    return this.http.get<HomeModel>(this.apiUrl);
  }

  updateHome(data: Partial<HomeModel>): Observable<{ message: string; home: HomeModel }> {
    return this.http.put<{ message: string; home: HomeModel }>(this.apiUrl, data);
  }
}