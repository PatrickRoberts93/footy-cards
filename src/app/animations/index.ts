import {animate, animateChild, group, query as q, sequence, state, style, transition, trigger} from '@angular/animations';

export function query(s, a) {
    return q(s, a, {optional: true});
}

export const routerTransition =
     trigger('routerTransition', [
        transition('* <=> *', [    
          query(':enter, :leave', style({ position: 'absolute', width:'100%', top: '0', left: '0' })),
          group([ 
            query(':enter', [
              style({ transform: 'translateX(200%)' }),
              animate('300ms ease-in-out', style({ transform: 'translateX(0%)' }))
            ]),
            query(':leave', [
              style({ transform: 'translateX(0%)' }),
              animate('300ms ease-in-out', style({ transform: 'translateX(-300%)' }))]),
          ])
        ])
      ]);