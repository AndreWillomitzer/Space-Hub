import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isActive = false;
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) this.isActive = false;
    });
    const mediaListener = window.matchMedia('(max-width: 1024px)');
    if (mediaListener.addEventListener)
      mediaListener.addEventListener(`change`, () => {
        this.isActive = false;
      });
    // Deprecated 'MediaQueryList' API, <Safari 14, IE, <Edge 16
    else
      mediaListener.addListener(() => {
        this.isActive = false;
      });
  }

  ngOnInit(): void {}

  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset >= 250
      ? (this.isScrolled = true)
      : (this.isScrolled = false);
  }

  clickMenu() {
    this.isActive = this.isActive ? false : true;
  }
}
