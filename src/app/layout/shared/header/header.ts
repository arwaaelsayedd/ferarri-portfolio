import { HomeService } from './../../../core/services/home/home';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  logoUrl = 'http://localhost:5000/uploads/logo.png';
  brandTitle = 'EZZ ELARAB';
  menuOpen = false;

  constructor(private HomeService: HomeService) {}

  ngOnInit(): void {
    this.HomeService.getHome().subscribe({
      next: (data) => {
        if (data?.logoUrl) {
          this.logoUrl = data.logoUrl;
        }
      },
      error: (err) => console.error('Error loading header logo:', err)
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}