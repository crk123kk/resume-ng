import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonSayComponent } from './person-say.component';

const personSayRoutes: Routes = [
    {
        path: '', 
        component: PersonSayComponent
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(
        personSayRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class PersonSayRoutingModule {

}