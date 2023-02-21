import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const zoomAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          width: '100%',
          "transform-origin": '50vw 50vh'
        })
      ]),
      query(':enter', [
        style({scale: 1.2, opacity: 0})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({scale: 0.8, opacity: 0}))
        ]),
        query(':enter', [
          animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({scale: 1, opacity: 1}))
        ]),
      ]),
    ]),
  ]);
