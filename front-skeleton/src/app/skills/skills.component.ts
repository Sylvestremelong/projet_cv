import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  newSkill: string = ''; // Holds the value of the new skill entered by the user
  skills: string[] = []; // Array to store the skills entered by the user

  saveSkill() {
    if (this.newSkill.trim() !== '') {
      this.skills.push(this.newSkill);

      this.newSkill = '';
    }
  }

  ngOnInit(){
    var val = localStorage.getItem("skills");
    console.log(typeof(val));
    
    if(val != undefined || val != null){
      this.skills = JSON.parse(val);
    }
  }

  constructor(private router: Router) {}

  submitSkills(){
    localStorage.setItem("skills", JSON.stringify(this.skills));
    this.router.navigate(['/result']);
  
  }

  removeSkill(i:any){
    this.skills.splice(i, 1);
  }
}
