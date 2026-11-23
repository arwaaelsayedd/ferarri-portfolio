import { ClientsService } from './../../core/services/clients/clients';
import { ClientModel } from './../../core/models/client';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-clients.html',
  styleUrl: './our-clients.css'
})
export class OurClients implements OnInit {
  clients: ClientModel[] = [
    {
      name: 'Tarek El-Mansoury',
      role: 'SF90 Stradale Owner',
      quote: 'The specification process was seamless and every detail arrived exactly as envisioned.'
    },
    {
      name: 'Karim Abdel-Rahman',
      role: '296 GTB Collector',
      quote: 'Unmatched technical precision and concierge care at every private event.'
    },
    {
      name: 'Nadia Fahmy',
      role: 'Roma Spider Owner',
      quote: 'From acquisition to ongoing maintenance, the showroom delivers true excellence.'
    }
  ];

  constructor(private ClientsService: ClientsService) {}

  ngOnInit(): void {
    this.ClientsService.getAll().subscribe({
      next: (data) => {
        if (Array.isArray(data) && data.length > 0) {
          this.clients = data;
        }
      },
      error: (err) => console.error('Error loading clients:', err)
    });
  }
}