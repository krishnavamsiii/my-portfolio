import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
   standalone: true,
  templateUrl: './header.html',
  // styleUrl: './header.css'
  styleUrls: ['./header.css'] // Uncomment if you have a CSS file for the header
  
})
export class Header {
isMenuCollapsed = true;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
  }

  navItems = [
    { path: '#hero', label: 'Home', icon: 'bi bi-house-door' },
    { path: '#about', label: 'About', icon: 'bi bi-person' },
    { path: '#resume', label: 'Resume', icon: 'bi bi-file-earmark' },
    { path: '#portfolio', label: 'Portfolio', icon: 'bi bi-collection' },
    { path: '#skills', label: 'Services', icon: 'bi bi-briefcase' },
    { path: '#certifications', label: 'Contact', icon: 'bi bi-envelope' }
  ];
}
