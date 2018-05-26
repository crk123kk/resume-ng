import { Component, OnInit } from "@angular/core";
import { GetInfoService } from "../../share/service/get-info.service";
import { initImageAnimation } from "../../share/animations/initImage-animations";

@Component({
    selector:'person-work',
    templateUrl:'./person-work.component.html',
    styleUrls:['./person-work.component.css'],
    animations:[initImageAnimation]
})

export class PersonWorkComponent implements OnInit{
    initState:string = 'in';
    dataList:Array<any>;
    constructor(
        public _getInfo : GetInfoService
    ){}

    ngOnInit(){
        this.initPage();
        this.loadInfo4();
    }

    loadInfo4() {
        this._getInfo.loadInfo4().subscribe(res=> {
            this.dataList = res.workList;
        });
    }

    initPage(){
        let self = this;
        setTimeout(function() {
            self.initState = 'out';
        },500)
    }
}