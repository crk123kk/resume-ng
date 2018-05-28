import { Component, OnInit } from "@angular/core";
import { GetInfoService } from "../../share/service/get-info.service";
@Component({
    selector:'person',
    templateUrl:'./person.component.html',
    styleUrls:['./person.component.css']
})

export class PersonComponent implements OnInit{
    dataList = [];
    constructor(
        public _getInfo : GetInfoService
    ){}

    ngOnInit() {
        this._asyncLoadInfo2();
    }

    _asyncLoadInfo2(){
        this._getInfo.loadInfo2().subscribe(res=> {
            this.dataList = res.personInfo
        });
    }
}