import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonInfoComponent } from './person-info.component';
import { PersonInfoRoutingModule } from './person-info-routing.module';

@NgModule({
  declarations: [
    PersonInfoComponent
  ],
  imports: [
    PersonInfoRoutingModule
  ],
})
export class PersonInfoModule { }
