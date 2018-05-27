import { Component, Input, OnChanges } from "@angular/core";
import { initImageAnimation } from "../../share/animations/initImage-animations";

@Component({
    selector:"show-info",
    templateUrl:"./show-info.component.html",
    styleUrls:["./show-info.component.css"],
    animations:[initImageAnimation]
})

export class ShowInfoComponent implements OnChanges{
    @Input() showInfo;
    initState:string = 'in';
    dataList = [];

    ngOnChanges() {
        if( this.showInfo && this.showInfo['length'] > 0){
            this.dataList = this.showInfo;
            this.initPage();
        }
    }


    initPage(){
        let self = this;
        setTimeout(function() {
            self.initState = 'out';
        },500)
    }
}