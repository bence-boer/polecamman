import {Directive, Renderer2, ElementRef, HostListener, ViewContainerRef} from '@angular/core';
import {SkeletonRectComponent} from '../ui/skeleton-rect/skeleton-rect.component';

@Directive({
  selector: '[uiMediaLoader]'
})
export class UiMediaLoaderDirective {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private vcr: ViewContainerRef
  ) {
    if (this.el.nativeElement instanceof HTMLImageElement) {
      this.handleImage();
    } else if (this.el.nativeElement instanceof HTMLVideoElement) {
      this.handleVideo();
    } else {
      console.error('uiMediaLoader directive is only applicable to images and videos');
    }
  }

  private handleImage() {
    const img = this.el.nativeElement as HTMLImageElement;
    if (img.naturalWidth > 0 && img.naturalHeight > 0) {
      return;
    }

    // Create a skeleton rect component
    const componentRef = this.vcr.createComponent(SkeletonRectComponent);
    // Set the mimic property to image
    componentRef.instance.mimic = 'media';
    // Insert the skeleton rect component before the image
    this.renderer.insertBefore(this.el.nativeElement.parentNode, componentRef.location.nativeElement, this.el.nativeElement);
  }

  private handleVideo() {
    const video = this.el.nativeElement as HTMLVideoElement;
    if (video.readyState > 0) {
      return;
    }

    // Create a skeleton rect component
    const componentRef = this.vcr.createComponent(SkeletonRectComponent);
    // Set the mimic property to video
    componentRef.instance.mimic = 'media';
    // Insert the skeleton rect component before the video
    this.renderer.insertBefore(this.el.nativeElement.parentNode, componentRef.location.nativeElement, this.el.nativeElement);
  }

  // Host listener for if the video thumbnail is loaded
  @HostListener('loadedmetadata')
  onLoadedMetadata() {
    // Remove the skeleton rect component
    this.vcr.clear();
  }

  // Host listener for if the image is loaded
  @HostListener('load')
  onLoad() {
    this.vcr.clear();
  }

  @HostListener('error')
  onError() {
    // TODO: Show a placeholder image
    // Show the image
    this.renderer.setStyle(this.el.nativeElement, 'visibility', 'visible');
    // Remove the skeleton rect component
    this.vcr.clear();
  }
}
