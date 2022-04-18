import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  url: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {

    var header = document.querySelector("header");
    var logo = document.getElementById("logo1"); // white logo
    var logo2 = document.getElementById("logo2"); // black logo
    const hamburger = document.querySelector('.hamburger');

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.url = val.url;

        // display the right navbar style when the component is init
        if (this.url !== '/home') {
          header?.classList.add("stick");
          logo?.classList.add("hidden");
          logo2?.classList.remove("hidden");
          hamburger?.classList.remove('white');
        } else {
          header?.classList.remove("stick");
          logo?.classList.remove("hidden");
          logo2?.classList.add("hidden");
          hamburger?.classList.add('white');
        }

      }
    });
  }

  @HostListener("window:scroll", ["$event"]) onScroll($event: any): void {
    // Change Navbar and Logo color when scroll
    var header = document.querySelector("header");
    var logo = document.getElementById("logo1"); // white logo
    var logo2 = document.getElementById("logo2"); // black logo
    const hamburger = document.querySelector('.hamburger');

    if (window.scrollY > 0 || this.url !== '/home') {
      header?.classList.add("stick");
      logo?.classList.add("hidden");
      logo2?.classList.remove("hidden");
      hamburger?.classList.remove('white');
    } else {
      header?.classList.remove("stick");
      logo?.classList.remove("hidden");
      logo2?.classList.add("hidden");
      hamburger?.classList.add('white');
    }

  }

  setActive(): void {
    // change hamburger style
    // display mobile menu
    const hamburger = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    hamburger?.classList.toggle('is-active');
    mobile_menu?.classList.toggle('is-active');
  }

}
