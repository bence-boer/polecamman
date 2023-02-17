import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'skeleton-rect',
  host: {
    'class': 'pulse'
  },
  template: ``,
  styleUrls: ['./skeleton-rect.component.scss']
})
export class SkeletonRect {
  @Input()
  width?: string;

  @Input()
  height?: string;

  @Input()
  aspectRatio?: string;

  constructor(private host: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    const host = this.host.nativeElement;

    host.style.setProperty('--skeleton-rect-width', this.finalize(this.width));
    host.style.setProperty('--skeleton-rect-height', this.finalize(this.height));
    host.style.setProperty('--skeleton-rect-aspect-ratio', this.aspectRatio ?? null);
  }

  finalize(input: string | undefined){
    switch (input) {
      case "fill":
        return  "100%";
      case "random":
        return this.random();
        case undefined:
        return "auto";
      default:
        return input;
    }
  }

  random() {
    let min = 30;
    let max = 90;
    return Math.random() * (max - min) + min + '%';
  }
}
