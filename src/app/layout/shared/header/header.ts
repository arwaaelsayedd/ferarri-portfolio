import { HomeService } from 'core/services/home.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  constructor(public HomeService: HomeService) {}

  ngOnInit(): void {
    const loadSub = this.homeService.loadHome().subscribe({
      error: () => {
        // Fallback if backend isn't reachable yet
      }
    });
  }
}
