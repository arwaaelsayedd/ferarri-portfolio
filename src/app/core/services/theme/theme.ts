import { ThemeModel } from './../../models/theme';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ThemeService {
  private apiUrl = 'http://localhost:5000/api/theme';
  constructor(private http: HttpClient) {}

  getTheme(): Observable<ThemeModel> {
    return this.http.get<ThemeModel>(this.apiUrl).pipe(
      tap((theme) => this.applyTheme(theme))
    );
  }

  updateTheme(data: Partial<ThemeModel>): Observable<{ message: string; theme: ThemeModel }> {
    return this.http.put<{ message: string; theme: ThemeModel }>(this.apiUrl, data).pipe(
      tap((res) => this.applyTheme(res.theme))
    );
  }

  applyTheme(theme: ThemeModel): void {
    const root = document.documentElement;
    if (theme.primaryColor) root.style.setProperty('--primary-color', theme.primaryColor);
    if (theme.backgroundColor) root.style.setProperty('--bg-color', theme.backgroundColor);
    if (theme.cardColor) root.style.setProperty('--card-color', theme.cardColor);
    if (theme.textColor) root.style.setProperty('--text-color', theme.textColor);
    if (theme.mutedTextColor) root.style.setProperty('--muted-text-color', theme.mutedTextColor);
  }
}