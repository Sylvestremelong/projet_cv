import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  formData = {
    universityName: '',
    universityLocation: '',
    degree: '',
    fieldOfStudy: '',
    graduationMonthYear: ''
  };

  ngOnInit(){
    var val = localStorage.getItem("education");
    console.log(typeof(val));
    
    if(val != undefined || val != null){
      this.formData = JSON.parse(val);
    }
  }

  constructor(private router: Router) {}

  onSubmit() {
    if(this.formData.universityName == '' || this.formData.universityLocation == '' || this.formData.degree == '' || this.formData.fieldOfStudy == '' || this.formData.graduationMonthYear == ''){
      alert("Please fill the required fields")
    }else{
      localStorage.setItem("education", JSON.stringify(this.formData));
      this.router.navigate(['/skills']);
    }
  }

  clearForm(){
    this.formData.degree='';
    this.formData.universityName='';
    this.formData.universityLocation='';
    this.formData.fieldOfStudy='';
    this.formData.graduationMonthYear='';
  }

}
