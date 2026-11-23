import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DashboardHeader } from '../shared/dashboard-header/dashboard-header';

@Component({
  imports: [RouterLink,RouterOutlet,DashboardHeader],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {}
