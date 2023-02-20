import {Directive, Output, EventEmitter, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[scrollTracker]'
})
export class ScrollTrackerDirective {
  @Output() scrollingFinished = new EventEmitter<void>();
  @Input() complete = false;
  emitted = false;

  @HostListener('window:scroll', ['$event'])
  onBodyScroll() {
    if (
      this.complete ||
      this.emitted ||
      window.innerHeight + window.scrollY < document.body.offsetHeight - 200
    ) {
      return;
    }

    this.emitted = true;
    setTimeout(() => {
      this.emitted = false;
      this.scrollingFinished.emit();
    }, 400);
  }
}
