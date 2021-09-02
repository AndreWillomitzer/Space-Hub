import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  isScrolled = false;

  ngOnInit(): void {}

  @HostListener('window:scroll')
  scrollEvent() {
    console.log(window.pageYOffset, this.isScrolled);
    window.pageYOffset >= 500
      ? (this.isScrolled = true)
      : (this.isScrolled = false);
  }
}
