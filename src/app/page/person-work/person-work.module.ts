import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonWorkComponent } from './person-work.component';
import { PersonWorkRoutingModule } from './person-work-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PersonWorkComponent
  ],
  imports: [
    CommonModule,
    PersonWorkRoutingModule
  ],
})
export class PersonWorkModule { }
