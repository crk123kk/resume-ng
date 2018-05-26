import { Component, OnInit } from "@angular/core";
import { HostBinding } from '@angular/core';
import { GetInfoService } from "../../share/service/get-info.service";
import { initImageAnimation } from "../../share/animations/initImage-animations";
@Component({
    selector:'person',
    templateUrl:'./person.component.html',
    styleUrls:['./person.component.css'],
    animations:[initImageAnimation]
})

export class PersonComponent implements OnInit{
    dataList = [];
    initState:string = 'in';
    constructor(
        public _getInfo : GetInfoService
    ){}

    ngOnInit() {
        this.initPage();
        this._asyncLoadInfo2();
    }

    _asyncLoadInfo2(){
        return new Promise((resolve,reject) =>{
            this._getInfo.loadInfo2().subscribe(res=> {
                this.dataList = res.personInfo
            });
        })
    }

    initPage(){
        let self = this;
        setTimeout(function() {
            self.initState = 'out';
        },500)
    }
}