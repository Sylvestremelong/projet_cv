import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule ],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {
  formData = {
    firstName: '',
    lastName: '',
    profession: '',
    city: '',
    postalCode: '',
    phone: '',
    email: ''
  };

  constructor(private router : Router) {}

  ngOnInit(){
    var val = localStorage.getItem("personal Info");
    
    if(val != undefined || val != null){
      this.formData = JSON.parse(val);
    }
  }

  onSubmit() {
    if(this.formData.firstName == '' || this.formData.lastName == '' || this.formData.city == '' || this.formData.phone == '' || this.formData.profession == ''){
      alert("Pleas fill out the required fields");
    }else{
      localStorage.setItem("personal Info", JSON.stringify(this.formData));
      this.router.navigate(['/experience']);
    }
  }

  clearForm(){
    this.formData.firstName='';
    this.formData.lastName='';
    this.formData.profession='';
    this.formData.city='';
    this.formData.postalCode='';
    this.formData.phone='';
    this.formData.email='';
  }
}
