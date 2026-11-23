import { AboutService } from './../../core/services/about/about';
import { AboutModel } from './../../core/models/about';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {
  aboutData: AboutModel = {
    eyebrow: 'About The Atelier',
    title: 'ENGINEERED WITHOUT COMPROMISE',
    description: 'Every vehicle curated within our showroom represents the pinnacle of Italian coachbuilding, aerodynamic efficiency, and bespoke personalization.',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=85',
    badgeYears: '75+ YEARS'
  };

  constructor(private AboutService: AboutService) {}

  ngOnInit(): void {
    this.AboutService.getAbout().subscribe({
      next: (data) => {
        if (data) {
          this.aboutData = { ...this.aboutData, ...data };
        }
      },
      error: (err) => console.error('Error loading about data:', err)
    });
  }
}