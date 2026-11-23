import { ClientsService } from './../../core/services/clients/clients';
import { ClientModel } from './../../core/models/client';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-our-clients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './our-clients.html',
  styleUrl: './our-clients.css'
})
export class OurClients implements OnInit {
  clients: ClientModel[] = [];
  formClient: ClientModel = { name: '', role: '', quote: '' };
  editingId: string | null = null;
  statusMessage = '';

  constructor(private ClientsService: ClientsService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.ClientsService.getAll().subscribe({
      next: (data) => {
        this.clients = Array.isArray(data) ? data : [];
      },
      error: (err) => console.error('Error loading clients:', err)
    });
  }

  saveClient(): void {
    if (!this.formClient.name.trim() || !this.formClient.quote.trim()) {
      return;
    }

    if (this.editingId) {
      this.ClientsService.update(this.editingId, this.formClient).subscribe({
        next: () => {
          this.statusMessage = 'Client updated successfully!';
          this.resetForm();
          this.loadClients();
        },
        error: (err) => {
          console.error('Error updating client:', err);
          this.statusMessage = 'Failed to update client.';
        }
      });
    } else {
      this.ClientsService.create(this.formClient).subscribe({
        next: () => {
          this.statusMessage = 'Client added successfully!';
          this.resetForm();
          this.loadClients();
        },
        error: (err) => {
          console.error('Error creating client:', err);
          this.statusMessage = 'Failed to add client.';
        }
      });
    }
  }

  editClient(client: ClientModel): void {
    this.editingId = client._id || client._id|| null;
    this.formClient = {
      name: client.name,
      role: client.role || '',
      quote: client.quote
    };
  }

  deleteClient(id?: string): void {
    if (!id) return;
    this.ClientsService.delete(id).subscribe({
      next: () => {
        this.statusMessage = 'Client deleted.';
        this.loadClients();
      },
      error: (err) => console.error('Error deleting client:', err)
    });
  }

  resetForm(): void {
    this.editingId = null;
    this.formClient = { name: '', role: '', quote: '' };
  }
}