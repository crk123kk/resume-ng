import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonWorkComponent } from './person-work.component';
import { PersonWorkRoutingModule } from './person-work-routing.module';
import { CommonModule } from '@angular/common';
import { ShareComponentModule } from '../../share/module/share-component.module';

@NgModule({
  declarations: [
    PersonWorkComponent
  ],
  imports: [
    CommonModule,
    ShareComponentModule,
    PersonWorkRoutingModule,
  ],
})
export class PersonWorkModule { }
