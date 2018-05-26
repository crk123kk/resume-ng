import { Component, OnInit, DoCheck } from "@angular/core";
import { GetInfoService } from "../../share/service/get-info.service";
import { CarService } from "../../share/service/Car.service";
import { GetStateService } from "../../share/service/get-state.service";

@Component({
    selector:'test4-component',
    templateUrl:'./test4.component.html',
    styleUrls:['./test4.component.css']
})

export class Test4Component implements OnInit,DoCheck{
    subscription1:any;
    subscription2:any;
    subscription3:any;
    engineStatus:boolean = false;
    serviceStatus:boolean = false;
    mockDatas:Array<any>;
    constructor(
        public _getInfo:GetInfoService,
        public carService:CarService,
        public _getState: GetStateService
    ) {}

    ngOnInit() {
        this.subscription1=this.carService.engineStatus.subscribe(status=>{this.engineStatus=status;});
        this.subscription2=this._getState.serviceStatus.subscribe(status=>{this.serviceStatus=status;});
    }

    onFired(){
        this.carService.changeEngineStatus(true);
    }

    onUnFired(){
        this.carService.changeEngineStatus(false);
    }

    getInfo() {
        this.subscription3 = this._getInfo.loadInfo1().subscribe(res=> {
            console.log(res);
            this.mockDatas = res.comtent;
            console.log(this.mockDatas);
            console.log(this.subscription3);
        });
    }
    ngDoCheck() {
        console.log('sdfsdfsdf');
        console.log(this.subscription3);
        if(this.subscription3 && this.subscription3.closed){
            this.serviceStatus = this.subscription3.closed;
        }
        console.log('sdfsdfsdf');
    }
}