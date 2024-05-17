import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from '../app/experience/experience.component';
import { EducationComponent } from '../app/education/education.component';
import { SkillsComponent } from '../app/skills/skills.component';
import { NavigationComponent } from '../app/navigation/navigation.component';
import { PersonalComponent } from './personal/personal.component';
import { ResultComponent } from './result/result.component';
export const routes: Routes = [
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '', component: PersonalComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
