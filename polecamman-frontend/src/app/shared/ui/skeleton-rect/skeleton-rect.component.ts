import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'skeleton-rect',
  template: ``,
  styleUrls: ['./skeleton-rect.component.scss'],
})
export class SkeletonRectComponent {
  @Input()
  width?: string;

  @Input()
  height?: string;

  @Input()
  aspectRatio?: string;

  @Input()
  position?: "absolute" | "relative" | "fixed" | "sticky" | "static" | "inherit" | "initial" | "unset";

  @Input()
  mimic?: "image" | "video" | "heading" | "text";

  constructor(private host: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    const host = this.host.nativeElement;

    switch (this.mimic) {
      case "image":
        this.width = "fill";
        this.height = "fill";
        break;
      case "video":
        this.width = "fill";
        this.height = "fill";
        this.position = "absolute";
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
    host.style.position = this.position ?? "relative";
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
