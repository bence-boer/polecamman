import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Contacts} from "../../../data-types/Contacts";
import {IntroductionService} from "../../../services/introduction.service";

@Component({
  selector: 'landing-page',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  @Input() contacts!: Contacts;
  @ViewChild('introduction', {static: true}) introduction !: ElementRef<HTMLElement>;
  constructor(private introductionService: IntroductionService) {}

  ngOnInit(): void {
    this.introductionService.getIntroduction().subscribe((introduction) => {
      this.introduction.nativeElement.innerHTML = introduction.attributes.content;
    });

    const toggler = document.getElementById("introduction-toggler")!;
    const textbox = document.getElementById("introduction")!;

    toggler.addEventListener('click', () => {
      if (textbox.style.maxHeight){
        // @ts-ignore
        textbox.style.maxHeight = null;
      } else {
        textbox.style.maxHeight = textbox.scrollHeight + 50 + "px";
      }
      textbox.classList.toggle('text-open');
      toggler?.classList.toggle('toggler-open');
    });
  }
}
