import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {MediaElement} from "../../data-types/MediaElement";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'media-viewer',
  templateUrl: './media-viewer.component.html',
  styleUrls: ['./media-viewer.component.scss']
})
export class MediaViewerComponent implements AfterViewInit {
  @Input()
  media !: MediaElement[];
  @Input()
  fullScreen = false;
  @Input()
  isModeChangeable = false;

  @ViewChild('slides') slides: ElementRef | undefined;
  @ViewChild('thumbnails') thumbnails: ElementRef | undefined;

  slideWidth = 0;
  currentMediaIndex = 0;
  serverURL = environment.serverURL;

  constructor(private host: ElementRef) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.slides!.nativeElement.addEventListener('scroll', () => this.watchScroll())
      this.setSlideWidth();
      addEventListener("resize", () => this.setSlideWidth());
    });

    addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowRight":
          this.nextMedia();
          break;
        case "ArrowLeft":
          this.previousMedia();
          break;
        case "Enter":
          if(this.isModeChangeable) this.enterFullScreen();
          break;
        case "Escape":
          if(this.isModeChangeable) this.exitFullScreen();
          break;
      }
    });

    if(this.isModeChangeable) {
      this.host.nativeElement.addEventListener("click", () => {
        this.fullScreen ? this.exitFullScreen() : this.enterFullScreen();
      });
    }
  }

  scrollToMedia(index: number) {
    this.slides?.nativeElement.scroll(index * this.slideWidth, 0)
  }

  nextMedia() {
    if (this.currentMediaIndex == this.media.length - 1) {
      this.currentMediaIndex = -1;
    }
    this.currentMediaIndex++;
    this.scrollToMedia(this.currentMediaIndex);
  }

  previousMedia() {
    if (this.currentMediaIndex == 0) {
      this.currentMediaIndex = this.media.length;
    }
    this.currentMediaIndex--;
    this.scrollToMedia(this.currentMediaIndex);
  }

  watchScroll() {
    const index = Math.round(this.slides!.nativeElement.scrollLeft / this.slideWidth);
    if (this.currentMediaIndex != index) {
      this.currentMediaIndex = index;
    }
  }

  setSlideWidth() {
    this.slideWidth = this.host.nativeElement.offsetWidth;
  }

  isImage(media: MediaElement) {
    return media.mime.includes("image");
  }

  isVideo(media: MediaElement) {
    return media.mime.includes("video");
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
