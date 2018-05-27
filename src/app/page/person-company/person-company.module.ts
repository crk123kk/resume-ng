import { NgModule } from "@angular/core";
import { PersonCompanyRoutingModule } from "./company-routing.module";
import { PersonCompanyComponent } from "./person-company.component";
import { CommonModule } from "@angular/common";
import { ShowInfoComponent } from "../../component/show-info/show-info.component";
import { ShareComponentModule } from "../../share/module/share-component.module";

@NgModule({
    declarations: [
        PersonCompanyComponent
    ],
    imports: [
        CommonModule,
        ShareComponentModule,
        PersonCompanyRoutingModule,
    ],
})

export class PersonCompanyModule{
}