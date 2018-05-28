import { Component, OnInit } from "@angular/core";
import { GetInfoService } from "../../share/service/get-info.service";

@Component({
    selector:'person-company',
    templateUrl:'./person-company.component.html',
    styleUrls:['./person-company.component.css']
})

export class PersonCompanyComponent implements OnInit{
    dataList:Array<any>;
    constructor(
        public _getInfo : GetInfoService
    ){}

    ngOnInit(){
        this.loadInfo2();
    }

    loadInfo2() {
        this._getInfo.loadInfo3().subscribe(res=> {
            this.dataList = res.companyList;
        });
    }
}