import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonSayComponent } from './person-say.component';
import { PersonSayRoutingModule } from './person-say-routing.module';

@NgModule({
  declarations: [
    PersonSayComponent
  ],
  imports: [
    PersonSayRoutingModule
  ],
})
export class PersonSayModule { }
