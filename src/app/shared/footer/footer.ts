import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../core/services/home.service';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {
  currentYear = new Date().getFullYear();

  constructor(
    public homeService: HomeService,
    public contactService: ContactService
  ) {}

  ngOnInit(): void {
    const homeSub = this.homeService.loadHome().subscribe({
      error: () => {}
    });

    const contactSub = this.contactService.loadContact().subscribe({
      error: () => {}
    });
  }
}