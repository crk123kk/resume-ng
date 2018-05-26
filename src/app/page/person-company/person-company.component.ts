import { Component, OnInit } from "@angular/core";
import { GetInfoService } from "../../share/service/get-info.service";
import { initImageAnimation } from "../../share/animations/initImage-animations";

@Component({
    selector:'person-company',
    templateUrl:'./person-company.component.html',
    styleUrls:['./person-company.component.css'],
    animations:[initImageAnimation]
})

export class PersonCompanyComponent implements OnInit{
    initState:string = 'in';
    dataList:Array<any>;
    constructor(
        public _getInfo : GetInfoService
    ){}

    ngOnInit(){
        this.initPage();
        this.loadInfo2();
    }

    loadInfo2() {
        this._getInfo.loadInfo3().subscribe(res=> {
            this.dataList = res.companyList;
        });
    }
    initPage(){
        let self = this;
        setTimeout(function() {
            self.initState = 'out';
        },500)
    }
}