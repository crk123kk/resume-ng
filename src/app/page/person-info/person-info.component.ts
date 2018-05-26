import { Component, OnInit } from "@angular/core";
import { HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../../share/animations/router-animations';

@Component({
    selector:'person-info',
    templateUrl:'./person-info.component.html',
    styleUrls:['./person-info.component.css'],
    animations:[slideInDownAnimation]
})
export class PersonInfoComponent implements OnInit{
    // 添加@HostBinding属性添加到类中以设置这个路由组件元素的动画和样式
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';
    @HostBinding('style.width') width = '100%';
    info:string;
    mockInfo:string;
    constructor() {}

    ngOnInit(){
        this.info = '';
        this.mockInfo = '轻启轩窗，春燕盘旋，杨柳依依，芳草青青，花影斑驳，桃李芳菲尽，夏花次第开。五月的风儿，轻轻的柔柔的暖暖的亲吻过脸颊，鼻间新绿的清香泉水般“汩汩”的流淌。走过春天，躲过流年，站在五月的时空隧道中，时光竟然还是这般的如此匆匆。绿萝拂过衣襟，青云打湿诺言，红尘陌上，我们独自行走，风儿吹乱了发梢，惊扰了一地的千纸鹤。轻点朱颜淡描妆，树影婆娑，花儿摇曳。也许，我们都很好，只是时光不凑巧。'
        this.innerInfo();
    }

    innerInfo() {
        for (var i = 0; i <= this.mockInfo.length; i++) {
            let j = i;
            let self = this;
            // 是的，闭包的块作用域！
            setTimeout(function timer() {
                self.info = self.mockInfo.substr(0,j);
            }, j * 10);
        }
    }
}