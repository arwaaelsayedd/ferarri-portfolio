import { DashboardHeader } from './../shared/dashboard-header/dashboard-header';
import { ThemeService } from './../../core/services/theme/theme';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DashboardHeader],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  constructor(private ThemeService: ThemeService) {}

  ngOnInit(): void {
    this.ThemeService.getTheme().subscribe({
      error: (err) => console.error('Failed to load theme:', err)
    });
  }
}