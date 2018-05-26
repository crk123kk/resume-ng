import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonSkillComponent } from './person-skill.component';

const personSkillRoutes: Routes = [
    {
        path: '', 
        component: PersonSkillComponent
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(
        personSkillRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class PersonSkillRoutingModule {

}