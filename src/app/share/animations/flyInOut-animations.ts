import { animate, state, style, transition, trigger, keyframes, query, stagger } from '@angular/animations';

// Component transition animations
export const flyInOut =
    trigger('flyInOut', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [ // 进场动画
            animate(2000, keyframes([
                style({ height: '0', opacity: 0, offset: 0 }), // 元素高度0，元素隐藏(透明度为0)，动画帧在0%
                style({ height: '*', opacity: 1, offset: 1 }) // 200ms后高度自适应展开，元素展开(透明度为1)，动画帧在100%
            ]))
        ]),
        transition('in => out', [ // 进场动画
            animate(2000, keyframes([
                style({ height: '0', opacity: 0, offset: 0 }), // 元素高度0，元素隐藏(透明度为0)，动画帧在0%
                style({ height: '*', opacity: 1, offset: 1 }) // 200ms后高度自适应展开，元素展开(透明度为1)，动画帧在100%
            ]))
        ]),
        transition('* => void', [
            animate(2000, keyframes([
                style({ height: '*', opacity: 1, offset: 0 }), // 与之对应，让元素从显示到隐藏一个过渡
                style({ height: '0', opacity: 0, offset: 1 })
            ]))
        ]),
        transition('out => in', [
            animate(2000, keyframes([
                style({ height: '*', opacity: 1, offset: 0 }), // 与之对应，让元素从显示到隐藏一个过渡
                style({ height: '0', opacity: 0, offset: 1 })
            ]))
        ]),
    ])
/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/