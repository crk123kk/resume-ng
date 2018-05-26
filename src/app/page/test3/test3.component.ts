import 'rxjs/add/operator/map';
import { Component, OnInit } from "@angular/core";
import { Http } from '@angular/http';
import { GetInfoService } from "../../share/service/get-info.service";

@Component({
    selector:'test3-component',
    templateUrl:'./test3.component.html',
    styleUrls:['./test3.component.css']
})

export class Test3Component implements OnInit{
    public mockDatas:Array<any>;
    constructor(
        public getInfo : GetInfoService,
        public _http: Http
    ){
        // _http.get('../app/page/test/testHttp.json').subscribe(res=> this.mobiles =res.json());
    }

    ngOnInit() {
        // let _info = this.getInfo.loadInfo1();
        // console.log(_info);
        // this._http.get('../app/page/test/testHttp.json').subscribe(res=> console.log(res));
        let getInfo = this.getInfo.loadInfo1().subscribe(res=> {
            console.log(res);
            this.mockDatas = res.comtent;
            console.log(this.mockDatas);
            console.log(getInfo);
        });
    }
}