import {Directive, ElementRef, HostListener, Input, Renderer2, ViewContainerRef} from '@angular/core';
import {TooltipAlign, TooltipComponent} from "../ui/tooltip/tooltip.component";

@Directive({
  selector: '[popover]'
})
export class PopoverDirective {
  @Input() popover!: string;
  @Input() popverParent!: HTMLElement;
  @Input() popoverAlign: TooltipAlign = 'bottom';
  @Input() popoverGap = '10px';
  @Input() popoverCopy = false;

  constructor(
    private renderer: Renderer2,
    private actual: ElementRef,
    private vcr: ViewContainerRef
  ) {
    if(!this.popverParent) this.popverParent = this.actual.nativeElement;
    const tooltip = this.vcr.createComponent(TooltipComponent);
    tooltip.instance.align = this.popoverAlign;
    tooltip.instance.gap = this.popoverGap;
    tooltip.instance.copy = this.popoverCopy;
    tooltip.instance.text = this.popover;
    tooltip.instance.initialize();

    // Insert tooltip into parent
    this.renderer.insertBefore(
      this.popverParent.parentNode,
      tooltip.location.nativeElement,
      this.actual.nativeElement
    );
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouseleave');
  }
}
