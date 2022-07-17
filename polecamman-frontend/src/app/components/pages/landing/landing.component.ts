import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'polecamman-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    const toggler = document.getElementById("toggler");
    const textbox = document.getElementById("introduction");

    toggler?.addEventListener('click', () => {
      textbox?.classList.toggle('text-open');
      toggler?.classList.toggle('toggler-open');
    });
  }
}
