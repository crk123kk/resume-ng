import { Component } from "@angular/core";
import { flyInOut } from "../../share/animations/flyInOut-animations";
import { listAnimation } from "../../share/animations/listAnimation-animations";

@Component({
    selector: 'test-component',
    templateUrl:'./test.component.html',
    styleUrls:['./test.component.css'],
    animations:[flyInOut,listAnimation]
})

export class TestComponent {
    testState:string = 'out';
    testArray1:Array<any> = [{name:'sdf',age:'23'},{name:'sdf',age:'23'},{name:'sdf',age:'23'},{name:'sdf',age:'23'},{name:'sdf',age:'23'}]
    items = [];
    testArray = [];
    changeState(){
        this.testState = this.testState == 'out' ? 'in' : 'out';
        // console.log(this.testState);
    }

    animationStarted(event) {
        // console.log(event);
    }

    animationDone(event) {
        // console.log(event);
    }

    showItems() {
        this.items = [0,1,2,3,4];
        this.testArray = this.testArray1;
    }
    hideItems() {
        this.items = [];
        this.testArray = [];
    }
    toggle() {
        this.items.length ? this.hideItems() : this.showItems();
        // this.testArray.length ? this.hideItems() : this.showItems();
    }
}