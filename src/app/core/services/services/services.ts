import { ServiceModel } from './../../models/services';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ServicesService {
  private apiUrl = 'http://localhost:5000/api/services';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ServiceModel[]> {
    return this.http.get<ServiceModel[]>(this.apiUrl);
  }

  create(data: ServiceModel): Observable<{ message: string; service: ServiceModel }> {
    return this.http.post<{ message: string; service: ServiceModel }>(this.apiUrl, data);
  }

  update(id: string, data: Partial<ServiceModel>): Observable<{ message: string; service: ServiceModel }> {
    return this.http.put<{ message: string; service: ServiceModel }>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}