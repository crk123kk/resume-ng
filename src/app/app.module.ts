import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserIndexComponent } from './page/index/index.component';
import { PersonComponent } from './page/person/person.component';
import { TestComponent } from './page/test/test.component';
import { Test2Component } from './page/test2/test2.component';
import { Test3Component } from './page/test3/test3.component';
import { GetInfoService } from './share/service/get-info.service';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { Test4Component } from './page/test4/test4.component';
import { GetStateService } from './share/service/get-state.service';
import { CarService } from './share/service/Car.service';
import { Test5Component } from './page/test5/test5.component';
import { Test6Component } from './page/test6/test6.component';
import { Test7Component } from './page/test7/test7.component';
import { PersonProjectComponent } from './page/person-project/person-project.component';


@NgModule({
  declarations: [
    AppComponent,
    UserIndexComponent,
    PersonComponent,
    PersonProjectComponent,
    TestComponent,
    Test2Component,
    Test3Component,
    Test4Component,
    Test5Component,
    Test6Component,
    Test7Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
  ],
  providers: [
    GetInfoService,
    GetStateService,
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
