import { Component, OnInit } from "@angular/core";
import { initImageAnimation } from "../../share/animations/initImage-animations";
import { listAnimation } from "../../share/animations/listAnimation-animations";
import { GetInfoService } from "../../share/service/get-info.service";

@Component({
    selector:'user-index',
    templateUrl:'./index.component.html',
    styleUrls:['./index.component.css'],
    animations:[initImageAnimation,listAnimation]
})

export class UserIndexComponent implements OnInit{

    initState:string = 'in';
    baseInfo = [];
    mockData1 = [];
    mockData = [];

    constructor(
        public _getInfo : GetInfoService
    ){}

    ngOnInit() {
        new Promise((resolve,reject) =>{
            this._getInfo.loadInfo1().subscribe(res=> {
                this.baseInfo = res.baseInfo;
                this.mockData1 = res.baseType;
                resolve('11');
            });
        }).then(() =>{
            this.initPage();
        })
    }

    initPage(){
        let self = this;
        setTimeout(function() {
            self.initState = 'out';
        },500)
        setTimeout(function() {
            self.mockData = self.mockData1;
        },1100)
    }

}