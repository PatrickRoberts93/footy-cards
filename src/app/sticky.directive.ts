// Sticky directive by Jonas G de Medeiros - https://github.com/jonasmedeiros/ng-sticky (with some modification)

import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[app-sticky]'
})
export class StickyDirective {

  private sticked: boolean = true;
  private selectedOffset: number = 0;
  private windowOffsetTop: number = 0;

  @Input() addClass: string = 'fixed';
  @Input() offSet: number = 0;

  constructor(private el: ElementRef, private render:Renderer2) {
    this.selectedOffset = this.el.nativeElement.getBoundingClientRect().top + document.documentElement.scrollTop;
  }

  private addSticky() {
    this.sticked = true;
    this.el.nativeElement.style.position = 'fixed';
    this.el.nativeElement.style.top = this.offSet + 'px';
    this.el.nativeElement.style.bottom = 'inherit';
    this.render.addClass(this.el.nativeElement, this.addClass);
  }

  private removeSticky() {
    this.sticked = false;
    this.el.nativeElement.style.position = '';
    this.el.nativeElement.style.top = '';
    this.el.nativeElement.style.bottom = '';
    this.render.removeClass(this.el.nativeElement, this.addClass);
  }

  @HostListener("window:scroll", [])
    onWindowScroll() {

      let offset: number = this.el.nativeElement.getBoundingClientRect().top + document.documentElement.scrollTop;
      this.windowOffsetTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      if (this.selectedOffset === 0) {
        this.selectedOffset = offset;
      }

      if (this.sticked === false) {
        this.selectedOffset = offset;
      }

      if ((this.windowOffsetTop + this.offSet) > this.selectedOffset) {
        this.addSticky();
      } else {
        this.removeSticky();
      }
    }
}
