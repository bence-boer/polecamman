import {Directive, Output, EventEmitter, OnInit} from '@angular/core';

@Directive({
  selector: '[scrollTracker]'
})
export class ScrollTrackerDirective implements OnInit {
  @Output() scrollingFinished = new EventEmitter<void>();
  emitted = false;

  ngOnInit() {
    document.body.addEventListener('scroll', () => {
      if (this.emitted) return;
      if (document.body.scrollTop + window.innerHeight < document.body.scrollHeight - 200) return;

      this.emitted = true;
      setTimeout(() => {
        this.emitted = false;
        this.scrollingFinished.emit();

      }, 400);
    });
  }

  /*
  @HostListener('document:scroll', ['$event'])
  onScroll() {
    console.log('scrolling');
    if (this.emitted) return;
    this.emitted = true;
    setTimeout(() => {
      this.emitted = false;
      this.scrollingFinished.emit();
    }, 400);
  }
   */
}
