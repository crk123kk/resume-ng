import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonCompanyComponent } from './person-company.component';

const personCompanyRoutes: Routes = [
    {
        path: '', 
        component: PersonCompanyComponent
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(
      personCompanyRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class PersonCompanyRoutingModule {

}