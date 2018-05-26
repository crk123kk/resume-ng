import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonInfoComponent } from './person-info.component';

const personInfoRoutes: Routes = [
    {
        path: '', 
        component: PersonInfoComponent
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(
      personInfoRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class PersonInfoRoutingModule {

}