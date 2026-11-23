import { HomeService } from './../../core/services/home/home';
import { ThemeService } from './../../core/services/theme/theme';
import { HomeModel } from './../../core/models/home';
import { ThemeModel } from './../../core/models/theme';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  homeData: HomeModel = {
    eyebrow: '',
    title: '',
    subtitle: '',
    logoUrl: '',
    heroImage: ''
  };

  themeData: ThemeModel = {
    primaryColor: '#da291c',
    backgroundColor: '#121212',
    cardColor: '#1c1c1c',
    textColor: '#ffffff',
    mutedTextColor: '#9ca3af'
  };

  statusMessage = '';

  constructor(
    private HomeService: HomeService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.HomeService.getHome().subscribe({
      next: (data) => {
        if (data) this.homeData = { ...this.homeData, ...data };
      },
      error: (err) => console.error('Error loading home:', err)
    });

   this.themeService.getTheme().subscribe({
  next: (theme) => {
    if (theme) {
      this.themeData = {
        primaryColor: theme.primaryColor || '#da291c',
        backgroundColor: theme.backgroundColor || '#121212',
        cardColor: theme.cardColor || '#1c1c1c',
        textColor: theme.textColor || '#ffffff',
        mutedTextColor: theme.mutedTextColor || '#9ca3af'
      };
    }
  },
  error: (err) => console.error('Error loading theme:', err)
});
  }

 saveHome(): void {
  console.log('1 - saveHome clicked', this.homeData);

  this.HomeService.updateHome(this.homeData).subscribe({
    next: (res) => {
      console.log('2 - updateHome response:', res);
      this.homeData = res.home || res || this.homeData;
      this.statusMessage = 'Home updated successfully!';
    },
    error: (err) => {
      console.error('3 - Error updating home:', err);
      this.statusMessage = 'Failed to update Home.';
    }
  });
}

  saveTheme(): void {
    this.themeService.updateTheme(this.themeData).subscribe({
      next: (res) => {
        this.themeData = res.theme || this.themeData;
        this.statusMessage = 'Theme colors updated successfully!';
      },
      error: (err) => {
        console.error('Error updating theme:', err);
        this.statusMessage = 'Failed to update Theme.';
      }
    });
  }
}