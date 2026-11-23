import { ContactModel } from './../../models/contact';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private apiUrl = 'http://localhost:5000/api/contact';

  constructor(private http: HttpClient) {}

  getContact(): Observable<ContactModel> {
    return this.http.get<ContactModel>(this.apiUrl);
  }

  updateContact(data: Partial<ContactModel>): Observable<{ message: string; contact: ContactModel }> {
    return this.http.put<{ message: string; contact: ContactModel }>(this.apiUrl, data);
  }
}