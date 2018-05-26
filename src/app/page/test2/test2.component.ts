import { Component, OnInit } from "@angular/core";
import { initImageAnimation } from "../../share/animations/initImage-animations";
import { listAnimation } from "../../share/animations/listAnimation-animations";

@Component({
    selector:'test2-component',
    templateUrl:'./test2.component.html',
    styleUrls:['./test2.component.css'],
    animations:[initImageAnimation,listAnimation]
})

export class Test2Component implements OnInit{

    initState:string = 'in';
    testArray1:Array<any> = [{name:'sdf',age:'23'},{name:'sdf',age:'23'},{name:'sdf',age:'23'},{name:'sdf',age:'23'},{name:'sdf',age:'23'}]
    testArray = [];
    ngOnInit() {
        let self = this;
        setTimeout(function() {
            self.initState = 'out';
        },500)
        setTimeout(function() {
            self.testArray = self.testArray1;
        },2500)
    }
}