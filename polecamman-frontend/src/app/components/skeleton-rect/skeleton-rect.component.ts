import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'skeleton-rect',
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

  @Input()
  mimic?: "image" | "heading" | "text";

  constructor(private host: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    const host = this.host.nativeElement;

    switch (this.mimic) {
      case "image":
        this.width = "fill";
        this.height = "fill";
        break;
      case "heading":
        this.width = "fill";
        this.height = "40px";
        host.style.borderRadius = "5px";
        host.style.marginBottom = "2em";
        break;
      case "text":
        this.width = "random";
        this.height = "20px";
        host.style.borderRadius = "5px";
        host.style.marginBottom = "1em";
        break;
    }

    host.style.width = this.finalize(this.width);
    host.style.height = this.finalize(this.height);
    host.style.aspectRatio = this.aspectRatio ?? "unset";
  }

  finalize(input: string | undefined) {
    switch (input) {
      case "fill":
        return "100%";
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
