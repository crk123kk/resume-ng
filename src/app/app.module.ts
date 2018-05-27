import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserIndexComponent } from './page/index/index.component';
import { PersonComponent } from './page/person/person.component';
import { GetInfoService } from './share/service/get-info.service';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { GetStateService } from './share/service/get-state.service';
import { PersonProjectComponent } from './page/person-project/person-project.component';
import { ShareComponentModule } from './share/module/share-component.module';


@NgModule({
  declarations: [
    AppComponent,
    UserIndexComponent,
    PersonComponent,
    PersonProjectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    ShareComponentModule,
  ],
  providers: [
    GetInfoService,
    GetStateService
  ],
  exports:[
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
