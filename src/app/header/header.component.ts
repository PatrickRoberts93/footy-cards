import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  // STICKY HEADER ELEMENTS
  @HostListener('window:scroll', [ ])
    onWindowScroll(){
      let scrollPos = document.scrollingElement.scrollTop + 74,
          header = document.getElementById("header"),
          headerText = document.getElementById("header-text");

      // PAGE TITLE
      if (headerText.offsetTop < scrollPos) {
        headerText.classList.add('fixed');
      } else {
       headerText.classList.remove('fixed');
      }

      // FILTER BAR
      // if ((header.offsetHeight - filterBar.offsetHeight) < scrollPos) {
      //   filterBar.classList.add('fixed');
      // } else {
      //   filterBar.classList.remove('fixed');
      // }
    }

  ngOnInit() {
  }

}
