import {Component, Input, OnInit} from '@angular/core';
import {Contacts} from "../../../data-types/Contacts";
import {IntroductionService} from "../../../services/introduction.service";
import {Introduction} from "../../../data-types/Introduction";

@Component({
  selector: 'landing-page',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  @Input() contacts!: Contacts;
  introduction?: Introduction;
  constructor(private introductionService: IntroductionService) {}

  ngOnInit(): void {
    this.introductionService.getIntroduction().subscribe((introduction) => {
      this.introduction = introduction;
    });

    const toggler = document.getElementById("introduction-toggler")!;
    const textbox = document.getElementById("introduction")!;

    toggler.addEventListener('click', () => {
      if (textbox.style.height){
        // @ts-ignore
        textbox.style.height = null;
      } else {
        textbox.style.height = textbox.scrollHeight + 50 + "px";
      }
      textbox.classList.toggle('text-open');
      toggler?.classList.toggle('toggler-open');
    });
  }
}
