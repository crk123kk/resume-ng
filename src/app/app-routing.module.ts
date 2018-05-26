import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserIndexComponent } from './page/index/index.component';
import { PersonComponent } from './page/person/person.component';
import { PersonProjectComponent } from './page/person-project/person-project.component';

const appRoutes: Routes = [
    { path : '' , redirectTo : '/index' , pathMatch : 'full' },
    { path : 'index' , component : UserIndexComponent},
    { path : 'person' , component : PersonComponent},
    { path : 'person-project' , component : PersonProjectComponent},
    { path : 'person-info' , loadChildren : 'app/page/person-info/person-info.module#PersonInfoModule'},
    { path : 'person-company' , loadChildren : 'app/page/person-company/person-company.module#PersonCompanyModule'},
    { path : 'person-say' , loadChildren : 'app/page/person-say/person-say.module#PersonSayModule'},
    { path : 'person-work' , loadChildren : 'app/page/person-work/person-work.module#PersonWorkModule'},
    { path : 'person-skill' , loadChildren : 'app/page/person-skill/person-skill.module#PersonSkillModule'}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}