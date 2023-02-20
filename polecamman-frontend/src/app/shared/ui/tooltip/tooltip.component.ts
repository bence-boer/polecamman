import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input() parent!: ElementRef;
  @Input() text = '';
  @Input() align: TooltipAlign = 'bottom';
  @Input() gap = '10px'
  @Input() copy = false;
  state: 'error' | 'copied' | 'showing' | 'hidden' = 'hidden';

  ngOnChanges() {
    if(this.parent) this.init();
  }

  init() {
    this.parent.nativeElement.addEventListener('mouseenter', () => {
      this.state = 'showing';
    });
    this.parent.nativeElement.addEventListener('mouseleave', () => {
      this.state = 'hidden';
    });
    this.parent.nativeElement.addEventListener('click', () => {
      if (this.copy) this.copyToClipboard();
    });
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

type TooltipAlign =
  'top-left'
  | 'top'
  | 'top-right'
  | 'right-top'
  | 'right'
  | 'rigth-bottom'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left-bottom'
  | 'left'
  | 'left-top';
