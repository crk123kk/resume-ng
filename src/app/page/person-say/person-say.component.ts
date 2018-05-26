import { Component, OnInit } from "@angular/core";
import { GetInfoService } from "../../share/service/get-info.service";

@Component({
    selector:'person-say',
    templateUrl:'./person-say.component.html',
    styleUrls:['./person-say.component.css']
})

export class PersonSayComponent implements OnInit{
    mockInfo = '';
    info = '';

    constructor(
        public _getInfo : GetInfoService
    ){}

    ngOnInit() {
        new Promise((resolve,reject) =>{
            this._getInfo.loadInfo6().subscribe(res=> {
                this.mockInfo = res.think;
                resolve('11');
            });
        }).then(() =>{
            this.innerInfo();
        })
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