import { ServicesService } from './../../core/services/services/services';
import { ServiceModel } from './../../core/models/services';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-our-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './our-services.html',
  styleUrl: './our-services.css'
})
export class OurServices implements OnInit {
  services: ServiceModel[] = [];
  formService: ServiceModel = { title: '', description: '' };
  editingId: string | null = null;
  statusMessage = '';

  constructor(private ServicesService: ServicesService) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.ServicesService.getAll().subscribe({
      next: (data) => {
        this.services = Array.isArray(data) ? data : [];
      },
      error: (err) => console.error('Error loading services:', err)
    });
  }

  saveService(): void {
    if (!this.formService.title.trim() || !this.formService.description.trim()) {
      return;
    }

    if (this.editingId) {
      this.ServicesService.update(this.editingId, this.formService).subscribe({
        next: () => {
          this.statusMessage = 'Service updated successfully!';
          this.resetForm();
          this.loadServices();
        },
        error: (err) => {
          console.error('Error updating service:', err);
          this.statusMessage = 'Failed to update service.';
        }
      });
    } else {
      this.ServicesService.create(this.formService).subscribe({
        next: () => {
          this.statusMessage = 'Service added successfully!';
          this.resetForm();
          this.loadServices();
        },
        error: (err) => {
          console.error('Error creating service:', err);
          this.statusMessage = 'Failed to add service.';
        }
      });
    }
  }

  editService(service: ServiceModel): void {
    this.editingId = service._id || service._id || null;
    this.formService = {
      title: service.title,
      description: service.description
    };
  }

  deleteService(id?: string): void {
    if (!id) return;
    this.ServicesService.delete(id).subscribe({
      next: () => {
        this.statusMessage = 'Service deleted.';
        this.loadServices();
      },
      error: (err) => console.error('Error deleting service:', err)
    });
  }

  resetForm(): void {
    this.editingId = null;
    this.formService = { title: '', description: '' };
  }
}