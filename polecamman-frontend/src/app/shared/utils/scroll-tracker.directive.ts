import {Directive, Output, EventEmitter, OnInit, Input, OnChanges, OnDestroy} from '@angular/core';

@Directive({
  selector: '[scrollTracker]'
})
export class ScrollTrackerDirective implements OnInit, OnChanges, OnDestroy {
  @Output() scrollingFinished = new EventEmitter<void>();
  @Input() finished = false;
  emitted = false;

  ngOnInit() {
    document.body.addEventListener('scroll', () => this.monitorScroll());
  }

  monitorScroll() {
    if (this.emitted) return;
    if (document.body.scrollTop + window.innerHeight < document.body.scrollHeight - 200) return;

    this.emitted = true;
    setTimeout(() => {
      this.emitted = false;
      this.scrollingFinished.emit();
    }, 400);
  }

  ngOnChanges() {
    if (this.finished) {
      // remove event listener
      document.body.removeEventListener('scroll', () => this.monitorScroll());
    }
  }

  ngOnDestroy() {
    // remove event listener
    document.body.removeEventListener('scroll', () => this.monitorScroll());
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
