import { animate, state, style, transition, trigger, query, stagger, keyframes, AUTO_STYLE } from '@angular/animations';

export const initImageAnimation =
trigger('initImageAnimation', [
    state('in', style({display: 'none'})),
    state('out', style({opacity: 'block'})),
    transition('in => out', [ // each time the binding value changes
        animate(500, keyframes([
            style({ height: '0', opacity: 0, offset: 0 }), // 元素高度0，元素隐藏(透明度为0)，动画帧在0%
            style({ height: '*', opacity: 1, offset: 1 }) // 200ms后高度自适应展开，元素展开(透明度为1)，动画帧在100%
        ]))
    ]),
    transition('out => in', [ // each time the binding value changes
        animate(500, keyframes([
            style({ height: '*', opacity: 1, offset: 0 }), // 与之对应，让元素从显示到隐藏一个过渡
            style({ height: '0', opacity: 0, offset: 1 })
        ]))
      ])
  ]);

