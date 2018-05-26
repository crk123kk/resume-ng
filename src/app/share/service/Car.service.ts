import {Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs/Rx";
@Injectable()
export class CarService{
    engineStatus:Observable<boolean>;
    private  observer:Observer<boolean>;
    constructor(){
        this.engineStatus= new Observable<boolean>(observer=>this.observer=observer).share();
    }

    changeEngineStatus(newstatus:boolean){
        if(this.observer!==undefined)
            this.observer.next(newstatus);
    }
}