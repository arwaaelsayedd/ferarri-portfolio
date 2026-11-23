import { AboutService } from './../../core/services/about/about';
import { AboutModel } from './../../core/models/about';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {
  aboutData: AboutModel = {
    eyebrow: '',
    title: '',
    description: '',
    image: '',
    badgeYears: ''
  };

  statusMessage = '';

  constructor(private AboutService: AboutService) {}

  ngOnInit(): void {
    this.AboutService.getAbout().subscribe({
      next: (data) => {
        if (data) this.aboutData = { ...this.aboutData, ...data };
      },
      error: (err) => console.error('Error loading about:', err)
    });
  }

  saveAbout(): void {
    this.AboutService.updateAbout(this.aboutData).subscribe({
      next: (res) => {
        this.aboutData = res.about || this.aboutData;
        this.statusMessage = 'About updated successfully!';
      },
      error: (err) => {
        console.error('Error updating about:', err);
        this.statusMessage = 'Failed to update About.';
      }
    });
  }
}