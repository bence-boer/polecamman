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
    const toggler = document.getElementById("read-more");
    const textbox = document.getElementById("introduction");

    console.log(textbox)
    toggler?.addEventListener('click', e => {
      textbox?.classList.toggle('text-open');
    });
  }
}
