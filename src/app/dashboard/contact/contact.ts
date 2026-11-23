import { ContactService } from './../../core/services/contact/contact';
import { ContactModel } from './../../core/models/contact';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  contactData: ContactModel = {
    address: '',
    phone: '',
    email: ''
  };

  statusMessage = '';

  constructor(private ContactService: ContactService) {}

  ngOnInit(): void {
    this.ContactService.getContact().subscribe({
      next: (data) => {
        if (data) this.contactData = { ...this.contactData, ...data };
      },
      error: (err) => console.error('Error loading contact info:', err)
    });
  }

  saveContact(): void {
    this.ContactService.updateContact(this.contactData).subscribe({
      next: (res) => {
        this.contactData = res.contact || this.contactData;
        this.statusMessage = 'Contact info updated successfully!';
      },
      error: (err) => {
        console.error('Error updating contact info:', err);
        this.statusMessage = 'Failed to update contact info.';
      }
    });
  }
}