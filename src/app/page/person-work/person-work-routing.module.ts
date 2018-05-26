import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonWorkComponent } from './person-work.component';

const personWorkRoutes: Routes = [
    {
        path: '', 
        component: PersonWorkComponent
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(
        personWorkRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class PersonWorkRoutingModule {

}