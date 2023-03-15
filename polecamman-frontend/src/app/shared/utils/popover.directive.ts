import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import {TooltipAlign, TooltipComponent} from "../ui/tooltip/tooltip.component";

@Directive({
  selector: '[popoverText]',
  standalone: true
})
export class PopoverDirective implements OnInit{
  @Input() popoverText!: string;
  @Input() popverParent!: HTMLElement;
  @Input() popoverAlign: TooltipAlign = 'bottom';
  @Input() popoverGap = '10px';
  @Input() popoverCopy = false;
  private tooltip!: ComponentRef<TooltipComponent>;

  constructor(
    private renderer: Renderer2,
    private actual: ElementRef,
    private vcr: ViewContainerRef
  ) {
    if(!this.popverParent) this.popverParent = this.actual.nativeElement;
    this.tooltip = this.vcr.createComponent(TooltipComponent);

    // Insert tooltip into parent
    this.renderer.insertBefore(
      this.popverParent.parentNode,
      this.tooltip.location.nativeElement,
      this.actual.nativeElement
    );
  }

  ngOnInit() {
    this.tooltip.instance.align = this.popoverAlign;
    this.tooltip.instance.gap = this.popoverGap;
    this.tooltip.instance.copy = this.popoverCopy;
    this.tooltip.instance.content = this.popoverText;
    this.tooltip.instance.initialize();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.tooltip.instance.state = 'showing';
    this.tooltip.location.nativeElement.classList.add('visible');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.tooltip.instance.state = 'hidden';
    this.tooltip.location.nativeElement.classList.remove('visible');
  }
}
