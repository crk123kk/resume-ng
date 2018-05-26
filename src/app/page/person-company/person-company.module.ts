import { NgModule } from "@angular/core";
import { PersonCompanyRoutingModule } from "./company-routing.module";
import { PersonCompanyComponent } from "./person-company.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        PersonCompanyComponent
    ],
    imports: [
        CommonModule,
        PersonCompanyRoutingModule
    ],
})

export class PersonCompanyModule{
}