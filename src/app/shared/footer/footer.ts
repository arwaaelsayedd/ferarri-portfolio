import { ContactService } from './../../core/services/contact/contact';
import { ContactModel } from './../../core/models/contact';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {
  contactInfo: ContactModel = {
    address: 'Via Abetone Inferiore 4, Maranello',
    phone: '+20 2 3539 0000',
    email: 'concierge@maranello-atelier.com'
  };

  constructor(private ContactService: ContactService) {}

  ngOnInit(): void {
    this.ContactService.getContact().subscribe({
      next: (data) => {
        if (data) {
          this.contactInfo = { ...this.contactInfo, ...data };
        }
      },
      error: (err) => console.error('Error loading footer contact info:', err)
    });
  }
}