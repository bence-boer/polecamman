import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input() text = '';
  @Input() align: TooltipAlign = 'bottom';
  @Input() gap = '10px'
  @Input() copy = false;
  state: 'error' | 'copied' | 'showing' | 'hidden' = 'hidden';
  private element: HTMLElement;

  constructor(actual: ElementRef) {
    this.element = actual.nativeElement;
  }

  initialize() {
    switch (this.align) {
      case 'top-left':
        this.element.style.top = `calc(-100% - ${this.gap})`;
        this.element.style.left = '0';
        break;
      case 'top':
        this.element.style.top = `calc(-100% - ${this.gap})`;
        this.element.style.left = '50%';
        this.element.style.translate = '-50%';
        break;
      case 'top-right':
        this.element.style.top = `calc(-100% - ${this.gap})`;
        this.element.style.right = '0';
        break;
      case 'right-top':
        this.element.style.top = '0';
        this.element.style.right = `calc(100% + ${this.gap})`;
        break;
      case 'right':
        this.element.style.top = '50%';
        this.element.style.right = `calc(100% + ${this.gap})`;
        this.element.style.translate = '-50%';
        break;
      case 'right-bottom':
        this.element.style.bottom = '0';
        this.element.style.right = `calc(100% + ${this.gap})`;
        break;
      case 'bottom-right':
        this.element.style.bottom = `calc(-100% - ${this.gap})`;
        this.element.style.right = '0';
        break;
      case 'bottom':
        this.element.style.bottom = `calc(-100% - ${this.gap})`;
        this.element.style.left = '50%';
        this.element.style.translate = '-50%';
        break;
      case 'bottom-left':
        this.element.style.bottom = `calc(-100% - ${this.gap})`;
        this.element.style.left = '0';
        break;
      case 'left-bottom':
        this.element.style.bottom = '0';
        this.element.style.left = `calc(100% + ${this.gap})`;
        break;
      case 'left':
        this.element.style.top = '50%';
        this.element.style.left = `calc(100% + ${this.gap})`;
        this.element.style.translate = '-50%';
        break;
      case 'left-top':
        this.element.style.top = '0';
        this.element.style.left = `calc(100% + ${this.gap})`;
        break;
    }
  }

  copyToClipboard(text = this.text) {
    if (this.state !== 'showing') return;
    navigator.clipboard.writeText(this.text).then(() => {
      this.text = $localize`Copied!`;
      this.state = 'copied';
      this.waitAndReset(text);
    }, () => {
      this.text = $localize`Not supported`;
      this.state = 'error';
      this.waitAndReset(text);
    });
  }

  waitAndReset(text: string) {
    setTimeout(() => {
      if (this.state !== 'showing' && this.state !== 'hidden') {
        this.state = 'showing';
        this.text = text;
      }
    }, 2000);
  }
}

export type TooltipAlign =
  'top-left'
  | 'top'
  | 'top-right'
  | 'right-top'
  | 'right'
  | 'right-bottom'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left-bottom'
  | 'left'
  | 'left-top';
