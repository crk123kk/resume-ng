import { Component, OnInit } from "@angular/core";
import { GetInfoService } from "../../share/service/get-info.service";
import { initImageAnimation } from "../../share/animations/initImage-animations";

@Component({
    selector:'person-skill',
    templateUrl:'./person-skill.component.html',
    styleUrls:['./person-skill.component.css'],
    animations:[initImageAnimation]
})

export class PersonSkillComponent implements OnInit{
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
        this._getInfo.loadInfo5().subscribe(res=> {
            this.dataList = res.skillList;
        });
    }

    initPage(){
        let self = this;
        setTimeout(function() {
            self.initState = 'out';
        },500)
    }
}