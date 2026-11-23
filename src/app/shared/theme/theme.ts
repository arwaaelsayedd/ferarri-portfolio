import { ThemeService } from './../../core/services/theme/theme';
import { ThemeModel } from './../../core/models/theme';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './theme.html',
  styleUrl: './theme.css'
})
export class Theme implements OnInit {
  themeData: ThemeModel = {
    primaryColor: '#da291c',
    backgroundColor: '#121212',
    cardColor: '#1c1c1c',
    textColor: '#ffffff',
    mutedTextColor: '#9ca3af'
  };

  statusMessage = '';

  constructor(private ThemeService: ThemeService) {}

  ngOnInit(): void {
    this.ThemeService.getTheme().subscribe({
      next: (theme) => {
        if (theme) {
          this.themeData = { ...this.themeData, ...theme };
        }
      },
      error: (err) => console.error('Error loading theme:', err)
    });
  }

  saveTheme(): void {
    this.ThemeService.updateTheme(this.themeData).subscribe({
      next: (res) => {
        this.themeData = res.theme || this.themeData;
        this.statusMessage = 'Theme updated successfully!';
      },
      error: (err) => {
        console.error('Error updating theme:', err);
        this.statusMessage = 'Failed to update theme.';
      }
    });
  }
}