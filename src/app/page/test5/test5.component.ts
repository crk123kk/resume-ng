import { Component } from "@angular/core";
import { GetInfoService } from "../../share/service/get-info.service";
import { resolve, reject } from "q";

@Component({
    selector:"test5-component",
    templateUrl:'./test5.component.html',
    styleUrls:['./test5.component.css']
})

export class Test5Component{

    constructor(
        public _getInfo : GetInfoService
    ){}

    getInfo(){
        this.loadInfo1();
        this.loadInfo2();
    }

    getInfo2(){
        this.asyncGetInfo1();
        // this.asyncPromiseTest();
    }

    asyncPromiseTest () {
        let promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("第一个定时器");
                resolve('你好');
            },3000)
        })
        promise.then(function (arg) {
            setTimeout(()=>{
                console.log("第二个定时器");
                console.log(arg);
            },3000)
        })
    }

    asyncGetInfo1(){
        /**
         * 两层嵌套
         */
        // let _promise = new Promise((resolve,reject) =>{
        //     this._getInfo.loadInfo1().subscribe(res=> {
        //         console.log(res.comtent);
        //         resolve('11');
        //     });
        // })
        // _promise.then((arg) => {
        //     this._getInfo.loadInfo2().subscribe(res=> {
        //         console.log(res.comtent);
        //         console.log(arg);
        //         resolve('22');
        //     });
        // });
        // _promise.then((arg) => {
        //     this.loadInfo1();
        //     console.log(arg);
        // })

        /**
         * 两层嵌套:标准版，resovle()应该写在异步函数中，只有当异步函数执行完毕的时候才执行resolve()函数
         * 这样才能保证当异步处理结束继续执行函数
         */
        // let _promise = new Promise((resolve,reject) =>{
        //     this._getInfo.loadInfo1().subscribe(res=> {
        //         console.log(res.comtent);
        //         resolve('两层嵌套');
        //     });
        // })
        // _promise.then((arg) => {
        //     this.loadInfo2();
        //     console.log(arg);
        // })

        /**
         * 三层嵌套
         * 三层嵌套比起两层嵌套来说多了一个返回new Promise,没有返回一个新的promise则无法继续执行
         */
        // let _promise1 = new Promise((resolve,reject) =>{
        //     this._getInfo.loadInfo1().subscribe(res=> {
        //         console.log(res.comtent);
        //         resolve('11');
        //     });
        // })

        // _promise1.then((arg) => {
        //     console.log(arg);
        //     return new Promise((resolve,reject) =>{
        //         this._getInfo.loadInfo2().subscribe(res=> {
        //             console.log(res.comtent);
        //             resolve('22');
        //         });
        //     })
        // }).then(() =>{
        //     this.loadInfo1();
        // })

        /**
         * 三层嵌套标准版
         */
        // new Promise((resolve,reject) =>{
        //     this._getInfo.loadInfo1().subscribe(res=> {
        //         console.log(res.comtent);
        //         resolve('11');
        //     });
        // }).then(() => {
        //     return new Promise((resolve,reject) =>{
        //         this._getInfo.loadInfo2().subscribe(res=> {
        //             console.log(res.comtent);
        //             resolve('22');
        //         });
        //     })
        // }).then(() =>{
        //     return new Promise((resolve,reject) =>{
        //         this._getInfo.loadInfo1().subscribe(res=> {
        //             console.log(res.comtent);
        //             resolve('11');
        //         });
        //     })
        // })

        /**
         * 嵌套精简形式——推荐
         * 需要不断的return一个新的promise，否则无法实现then的步骤一步一步的执行的效果
         */
        // this._asyncLoadInfo1()
        // .then(() =>{
        //     return this._asyncLoadInfo2();
        // }).then(() => {
        //     return this._asyncLoadInfo1();
        // }).then(() => {
        //     return this._asyncLoadInfo2();
        // })

    }

    _asyncLoadInfo1(){
        return new Promise((resolve,reject) =>{
            this._getInfo.loadInfo1().subscribe(res=> {
                console.log(res.comtent);
                resolve('11');
            });
        })
    }

    _asyncLoadInfo2(){
        return new Promise((resolve,reject) =>{
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
        console.log('info1');
    }

    loadInfo2() {
        let _info2:any;
        this._getInfo.loadInfo2().subscribe(res=> {
            _info2 = res.comtent;
            console.log(_info2);
        });
        console.log('info2');
    }
}