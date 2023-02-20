import {Directive, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: '[scrollTracker]'
})
export class ScrollTrackerDirective {
  @Output() scrollingFinished = new EventEmitter<void>();

  emitted = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    console.log('scrolling');
    if (this.emitted) return;
    this.emitted = true;
    setTimeout(() => {
      this.emitted = false;
      this.scrollingFinished.emit();
    }, 100);
  }
}
