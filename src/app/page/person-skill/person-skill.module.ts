import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonSkillComponent } from './person-skill.component';
import { PersonSkillRoutingModule } from './person-skill-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PersonSkillComponent
  ],
  imports: [
    CommonModule,
    PersonSkillRoutingModule
  ],
})
export class PersonSkillModule { }
