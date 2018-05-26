import { Component } from "@angular/core";
import { GetInfoService } from "../../share/service/get-info.service";
import { resolve, reject } from "q";

@Component({
    selector:"test6-component",
    templateUrl:'./test6.component.html',
    styleUrls:['./test6.component.css']
})

export class Test6Component{

    constructor(
        public _getInfo : GetInfoService
    ){}

    getInfo(){
        this.loadInfo1();
        this.loadInfo2();
    }

    getInfo2(){
        let _pointGetInfo = this.asyncGetInfo1();
        // let _nextPoint = ;
        // this.nextGetInfo(_pointGetInfo.next());
        _pointGetInfo.next().value.then(() =>{
            console.log('t1');
            return _pointGetInfo.next().value;
        }).then(() =>{
            console.log('t2');
            return _pointGetInfo.next().value;
        }).then(() =>{
            console.log('t3');
            return _pointGetInfo.next().value;
        }).then(() =>{
            console.log('t4');
            return _pointGetInfo.next().value;
        }).then(() =>{
            console.log('t5');
            return _pointGetInfo.next().value;
        })
    }

    // nextGetInfo(nextPoint) {
    //     console.log(nextPoint);
    //     while(nextPoint.value){
    //         nextPoint.then(() =>{
    //             return this.nextGetInfo(nextPoint.next().value)
    //         })
    //     }
    // }

    *asyncGetInfo1(){
        yield this._asyncLoadInfo1();
        yield this._asyncLoadInfo2();
        yield this._asyncLoadInfo1();
        yield this._asyncLoadInfo2();
    }

    _asyncLoadInfo1(){
        return new Promise((resolve) =>{
            this._getInfo.loadInfo1().subscribe(res=> {
                console.log(res.comtent);
                resolve('11');
            });
        })
    }

    _asyncLoadInfo2(){
        return new Promise((resolve) =>{
            this._getInfo.loadInfo2().subscribe(res=> {
                console.log(res.comtent);
                resolve('22');
            });
        })
    }
    
    loadInfo1() {
        let _info1:any;
        this._getInfo.loadInfo1().subscribe(res=> {
            _info1 = res.comtent;
            console.log(_info1);
        });
    }

    loadInfo2() {
        let _info2:any;
        this._getInfo.loadInfo2().subscribe(res=> {
            _info2 = res.comtent;
            console.log(_info2);
        });
    }
}