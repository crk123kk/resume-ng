import { Component, OnInit } from "@angular/core";
import { GetInfoService } from "../../share/service/get-info.service";

@Component({
    selector:'person-skill',
    templateUrl:'./person-skill.component.html',
    styleUrls:['./person-skill.component.css']
})

export class PersonSkillComponent implements OnInit{
    dataList:Array<any>;
    constructor(
        public _getInfo : GetInfoService
    ){}

    ngOnInit(){
        this.loadInfo4();
    }

    loadInfo4() {
        this._getInfo.loadInfo5().subscribe(res=> {
            this.dataList = res.skillList;
        });
    }
}