import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  imgUrl = 'https://upload.wikimedia.org/wikipedia/en/0/02/MTG_Arena_Logo.png';
  constructor(private router: Router) {}
  navigateHome() {
    this.router.navigate(['home']);
  }
}
