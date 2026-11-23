import { ClientModel } from './../../models/client';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClientsService {
  private apiUrl = 'http://localhost:5000/api/clients';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(this.apiUrl);
  }

  create(data: ClientModel): Observable<{ message: string; client: ClientModel }> {
    return this.http.post<{ message: string; client: ClientModel }>(this.apiUrl, data);
  }

  update(id: string, data: Partial<ClientModel>): Observable<{ message: string; client: ClientModel }> {
    return this.http.put<{ message: string; client: ClientModel }>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}