import { trigger, state, animate, transition, style, query, stagger, keyframes, group } from '@angular/animations';
 
export const routerTransition =
     trigger('routerTransition', [
        transition('* <=> *', [    
          query(':enter, :leave', style({ position: 'absolute', width:'100%', top: '0', left: '0' }), {optional: true}),
          group([
            query(':enter', [
              style({ transform: 'translateX(200%)' }),
              animate('300ms ease-in-out', style({ transform: 'translateX(0%)' }))
            ], {optional: true}),
            query(':leave', [
              style({ transform: 'translateX(0%)' }),
              animate('300ms ease-in-out', style({ transform: 'translateX(-300%)' }))], {optional: true}),
          ])
        ])
      ]);
