import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from '../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, Header, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}