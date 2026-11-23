import { HomeService } from './../../core/services/home/home';
import { HomeModel } from './../../core/models/home';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  homeData: HomeModel = {
    eyebrow: 'SCUDERIA HERITAGE & PRECISION',
    title: 'THE ART OF PERFORMANCE',
    subtitle: 'Forged in wind-tunnel precision and racing DNA.',
    logoUrl: 'http://localhost:5000/uploads/logo.png',
    heroImage: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1920&q=85'
  };

  constructor(private HomeService: HomeService) {}

  ngOnInit(): void {
    this.HomeService.getHome().subscribe({
      next: (data) => {
        if (data) {
          this.homeData = { ...this.homeData, ...data };
        }
      },
      error: (err) => console.error('Error loading home data:', err)
    });
  }
}