import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonSkillComponent } from './person-skill.component';
import { PersonSkillRoutingModule } from './person-skill-routing.module';
import { CommonModule } from '@angular/common';
import { ShareComponentModule } from '../../share/module/share-component.module';

@NgModule({
  declarations: [
    PersonSkillComponent
  ],
  imports: [
    CommonModule,
    ShareComponentModule,
    PersonSkillRoutingModule
  ],
})
export class PersonSkillModule { }
