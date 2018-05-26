import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserIndexComponent } from './page/index/index.component';
import { PersonComponent } from './page/person/person.component';
import { TestComponent } from './page/test/test.component';
import { Test2Component } from './page/test2/test2.component';
import { Test3Component } from './page/test3/test3.component';
import { Test4Component } from './page/test4/test4.component';
import { Test5Component } from './page/test5/test5.component';
import { Test6Component } from './page/test6/test6.component';
import { Test7Component } from './page/test7/test7.component';
import { PersonProjectComponent } from './page/person-project/person-project.component';

const appRoutes: Routes = [
    { path : '' , redirectTo : '/index' , pathMatch : 'full' },
    { path : 'index' , component : UserIndexComponent},
    { path : 'person' , component : PersonComponent},
    { path : 'test' , component : TestComponent},
    { path : 'test2' , component : Test2Component},
    { path : 'test3' , component : Test3Component},
    { path : 'test4' , component : Test4Component},
    { path : 'test5' , component : Test5Component},
    { path : 'test6' , component : Test6Component},
    { path : 'test7' , component : Test7Component},
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