import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input() text = '';
  state: 'hidden' | 'showing' | 'copied' | 'error' = 'hidden';

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
