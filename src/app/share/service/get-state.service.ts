import {Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs/Rx";
@Injectable()
export class GetStateService{
    serviceStatus:Observable<boolean>;
    private  observer:Observer<boolean>;
    constructor(){
        this.serviceStatus= new Observable<boolean>(observer=>this.observer=observer).share();
    }

    changeServiceStatus(newstatus:boolean){
        if(this.observer!==undefined)
            this.observer.next(newstatus);
    }
}