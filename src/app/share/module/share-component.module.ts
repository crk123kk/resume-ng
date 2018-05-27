import { NgModule } from "@angular/core";
import { ShowInfoComponent } from "../../component/show-info/show-info.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ShowInfoComponent
    ],
    imports: [
        CommonModule
    ],
    exports:[
        ShowInfoComponent
    ]
})

export class ShareComponentModule{
}