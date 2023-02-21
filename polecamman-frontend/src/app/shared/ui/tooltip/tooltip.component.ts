import {Component, ElementRef, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnChanges{
  @Input() text = '';
  @Input() align: TooltipAlign = 'bottom';
  @Input() gap = '10px'
  @Input() copy = false;
  state: 'error' | 'copied' | 'showing' | 'hidden' = 'hidden';
  private element: HTMLElement;

  constructor(actual: ElementRef) {
    this.element = actual.nativeElement;
  }

  ngOnChanges() {
    if(this.state === 'showing') this.element.classList.add('visible');
    else if(this.state === 'hidden') this.element.classList.remove('visible');
  }

  initialize() {
    this.element.classList.add(this.align);
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
