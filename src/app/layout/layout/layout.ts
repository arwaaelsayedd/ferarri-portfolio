import { ThemeService } from './../../core/services/theme/theme';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from '../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Header, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout implements OnInit {
  constructor(private ThemeService: ThemeService) {}

  ngOnInit(): void {
    this.ThemeService.getTheme().subscribe({
      error: (err) => console.error('Failed to load theme:', err)
    });
  }
}