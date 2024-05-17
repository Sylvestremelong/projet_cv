import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  @ViewChild('cvContainer') cvContainer!: ElementRef; 

  personal = {
    firstName: '',
    lastName: '',
    profession: '',
    city: '',
    postalCode: '',
    phone: '',
    email: ''
  };

  experience = {
    companyName: '',
    position: '',
    startYear: null,
    endYear: null
  };

  education = {
    universityName: '',
    universityLocation: '',
    degree: '',
    fieldOfStudy: '',
    graduationMonthYear: ''
  };

  skills: string[] = [];

  ngOnInit(){
    var info = localStorage.getItem("personal Info");
    var epx = localStorage.getItem("experience");
    var edu = localStorage.getItem("education");
    var skill = localStorage.getItem("skills");
    
    if(info != undefined || info != null){
      this.personal = JSON.parse(info);
    }
    if(epx != undefined || epx != null){
      this.experience = JSON.parse(epx);
    }
    if(edu != undefined || edu != null){
      this.education = JSON.parse(edu);
    }
    if(skill != undefined || skill != null){
      this.skills = JSON.parse(skill);
    }
    
  }

 

}
