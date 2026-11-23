import { ServicesService } from './../../core/services/services/services';
import { ServiceModel } from './../../core/models/services';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.html',
  styleUrl: './our-services.css'
})
export class OurServices implements OnInit {
  services: ServiceModel[] = [
    {
      title: 'Atelier Configuration',
      description: 'One-on-one specification consultations for exterior paintwork, carbon packages, and cabin trims.'
    },
    {
      title: 'Certified Maintenance',
      description: 'Factory-trained master technicians utilizing official diagnostic telemetry and OEM parts.'
    },
    {
      title: 'Private Track Days',
      description: 'Exclusive circuit access with telemetry engineers and driving instructors.'
    }
  ];

  constructor(private ServicesService: ServicesService) {}

  ngOnInit(): void {
    this.ServicesService.getAll().subscribe({
      next: (data) => {
        if (Array.isArray(data) && data.length > 0) {
          this.services = data;
        }
      },
      error: (err) => console.error('Error loading services:', err)
    });
  }
}