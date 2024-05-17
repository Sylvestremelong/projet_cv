import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    // AppComponent,
    // ExperienceComponent,
    // EducationComponent,
    // SkillsComponent,
    // NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // Add FormsModule here
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
