import { Component, OnInit } from "@angular/core";
import { GetInfoService } from "../../share/service/get-info.service";

@Component({
    selector:'person-work',
    templateUrl:'./person-work.component.html',
    styleUrls:['./person-work.component.css']
})

export class PersonWorkComponent implements OnInit{
    dataList:Array<any>;
    constructor(
        public _getInfo : GetInfoService
    ){}

    ngOnInit(){
        this.loadInfo4();
    }

    loadInfo4() {
        this._getInfo.loadInfo4().subscribe(res=> {
            this.dataList = res.workList;
        });
    }

}