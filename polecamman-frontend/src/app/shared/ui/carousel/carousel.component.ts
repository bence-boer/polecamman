import { AfterContentInit, Component, ContentChild, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgForOf, NgTemplateOutlet } from "@angular/common";

@Component({
  standalone: true,
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  imports: [
    NgTemplateOutlet,
    NgForOf
  ],
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterContentInit {
  @Input() items!: any[];
  @Input() fullScreen = false;
  @Input() isModeChangeable = false;
  @ContentChild('contentTemplate') contentTemplate!: TemplateRef<any>;
  @ViewChild('carousel') slides: ElementRef | undefined;
  @ViewChild('thumbnails') thumbnails: ElementRef | undefined;

  carouselWidth = 0;
  currentItemIndex = 0;

  ngAfterContentInit() {
    if (!this.contentTemplate) {
      console.error('Content template not found');
    }
  }

  constructor(private host: ElementRef) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.slides!.nativeElement.addEventListener('scroll', () => this.watchScroll());
      this.setSlideWidth();
      addEventListener("resize", () => this.setSlideWidth());
    });

    addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowRight":
          this.nextItem();
          break;
        case "ArrowLeft":
          this.previousItem();
          break;
        case "Enter":
          if (this.isModeChangeable) this.enterFullScreen();
          break;
        case "Escape":
          if (this.isModeChangeable) this.exitFullScreen();
          break;
      }
    });

    if (this.isModeChangeable) {
      this.host.nativeElement.addEventListener("click", () => {
        this.fullScreen ? this.exitFullScreen() : this.enterFullScreen();
      });
    }
  }

  scrollToItem(index: number) {
    this.slides?.nativeElement.scroll(index * this.carouselWidth, 0);
  }

  nextItem() {
    if (this.currentItemIndex == this.items.length - 1) {
      this.currentItemIndex = -1;
    }
    this.currentItemIndex++;
    this.scrollToItem(this.currentItemIndex);
  }

  previousItem() {
    if (this.currentItemIndex == 0) {
      this.currentItemIndex = this.items.length;
    }
    this.currentItemIndex--;
    this.scrollToItem(this.currentItemIndex);
  }

  watchScroll() {
    const index = Math.round(this.slides!.nativeElement.scrollLeft / this.carouselWidth);
    if (this.currentItemIndex != index) {
      this.currentItemIndex = index;
    }
  }

  setSlideWidth() {
    this.carouselWidth = this.host.nativeElement.offsetWidth;
  }

  private enterFullScreen() {
    this.fullScreen = true;
    this.host.nativeElement.classList.add("full-screen");
    this.setSlideWidth();
  }

  private exitFullScreen() {
    this.fullScreen = false;
    this.host.nativeElement.classList.remove("full-screen");
    this.setSlideWidth();
  }
}
