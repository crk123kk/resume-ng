import { Component } from "@angular/core";
import { GetInfoService } from "../../share/service/get-info.service";
import { resolve, reject } from "q";

@Component({
    selector:"test7-component",
    templateUrl:'./test7.component.html',
    styleUrls:['./test7.component.css']
})

export class Test7Component{

    constructor(
        public _getInfo : GetInfoService
    ){}

    getInfo(){
        this.loadInfo1();
        this.loadInfo2();
    }

    getInfo2(){
        this._asyncGetInfo().then((arg) => {
            console.log(arg);
        });
    }

    /**
     * 使用async await的形式相对于promise来说不用一直使用then的链式调用
     * 这样的调用形式给人的感觉更方便和易懂
     * async表示其函数内部包含异步行为
     * await表示其等待其后的异步操作执行完毕之后再执行其它await的异步行为
     * 一个一个await的操作执行
     */
    async _asyncGetInfo() {
        await this._asyncLoadInfo1();
        await this._asyncLoadInfo2();
        await this._asyncLoadInfo11();
        await this._asyncLoadInfo22();
        return 'sdf';
    }

    /**
     * _asyncLoadInfo1 和 _asyncLoadInfo11这两个方法的本质是一样的，
     * 都是为了返回一个promise对象然后通过resovle方法
     * 来判断是否继续执行异步操作，当执行了resolve的时候继续执行异步操作
     * await 和 return的效果相同，因此可以将_asyncLoadInfo11 改写成 _asyncLoadInfo1
     */

    async _asyncLoadInfo1() {
        await new Promise((resolve) =>{
            this._getInfo.loadInfo1().subscribe(res=> {
                console.log(res.comtent);
                resolve('11');
            });
        })
    }

    _asyncLoadInfo11() {
        return new Promise((resolve) =>{
            this._getInfo.loadInfo1().subscribe(res=> {
                console.log(res.comtent);
                resolve('11');
            });
        })
    }

    async _asyncLoadInfo2() {
        await new Promise((resolve) =>{
            this._getInfo.loadInfo2().subscribe(res=> {
                console.log(res.comtent);
                resolve('22');
            });
        })
    }

    _asyncLoadInfo22() {
        return new Promise((resolve) =>{
            this._getInfo.loadInfo2().subscribe(res=> {
                console.log(res.comtent);
                resolve('22');
            });
        })
    }
      

    loadInfo1() {
        this._getInfo.loadInfo1().subscribe(res=> {
            console.log(res.comtent);
        });
        console.log('info1');
    }

    loadInfo2() {
        this._getInfo.loadInfo2().subscribe(res=> {
            console.log(res.comtent);
        });
        console.log('info2');
    }
}