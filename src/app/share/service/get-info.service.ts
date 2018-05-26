import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()

export class GetInfoService{

    constructor(
        public _http: Http
    ){}

    loadInfo1(){
        return this._http.get('/assets/mock/info1.json').map(res => this.handleResponse1(res));
    }

    handleResponse1(res) {
        return res.json();
    }

    loadInfo2(){
        return this._http.get('/assets/mock/info2.json').map(res => this.handleResponse2(res));
    }

    handleResponse2(res) {
        return res.json();
    }

    loadInfo3(){
        return this._http.get('/assets/mock/info3.json').map(res => this.handleResponse3(res));
    }

    handleResponse3(res) {
        return res.json();
    }

    loadInfo4(){
        return this._http.get('/assets/mock/info4.json').map(res => this.handleResponse4(res));
    }

    handleResponse4(res) {
        return res.json();
    }

    loadInfo5(){
        return this._http.get('/assets/mock/info5.json').map(res => this.handleResponse5(res));
    }

    handleResponse5(res) {
        return res.json();
    }

    loadInfo6(){
        return this._http.get('/assets/mock/info6.json').map(res => this.handleResponse6(res));
    }

    handleResponse6(res) {
        return res.json();
    }

    loadInfo7(){
        return this._http.get('/assets/mock/info7.json').map(res => this.handleResponse7(res));
    }

    handleResponse7(res) {
        return res.json();
    }
}