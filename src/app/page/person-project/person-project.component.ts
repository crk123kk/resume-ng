import { Component, OnInit } from "@angular/core";
import { GetInfoService } from "../../share/service/get-info.service";
import { initImageAnimation } from "../../share/animations/initImage-animations";

@Component({
    selector:"person-project",
    templateUrl:"./person-project.component.html",
    styleUrls:["./person-project.component.css"],
    animations:[initImageAnimation]
})

export class PersonProjectComponent implements OnInit{
    initState:string = 'in';
    info = '';
    constructor(
        public _getInfo : GetInfoService
    ){}

    ngOnInit(){
        this.initPage();
        this._asyncLoadInfo7();
    }

    _asyncLoadInfo7(){
        return new Promise((resolve,reject) =>{
            this._getInfo.loadInfo7().subscribe(res=> {
                this.info = res.skill
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
