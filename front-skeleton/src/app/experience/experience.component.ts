import { Component } from '@angular/core';
import { CvService } from '../service/cv.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  formData = {
    companyName: '',
    position: '',
    startYear: null,
    endYear: null
  };

  isStillWorking: boolean = false;

  ngOnInit(){
    var val = localStorage.getItem("experience");
    console.log(typeof(val));
    
    if(val != undefined || val != null){
      this.formData = JSON.parse(val);
    }
  }

  constructor(private router: Router) {}

  onSubmit() {
    if(this.formData.companyName == '' || this.formData.position == ''){
      alert("Please fill the required fields")
    }else{
      localStorage.setItem("experience", JSON.stringify(this.formData));
      this.router.navigate(['/education']);
    }
    
  }

  clearForm(){
    this.formData.companyName='';
    this.formData.position='';
    this.formData.startYear=null;
    this.formData.endYear=null;
  }

  // jobTitle: string = '';
  // companyName: string = '';
  // year: string = '';
  // stillWorking: boolean = false;
  // none: boolean = false;

  // constructor(private cvService: CvService) { }

  // // Function to submit form data to the backend
  // submitForm(): void {
  //   const formData = {
  //     jobTitle: this.jobTitle,
  //     companyName: this.companyName,
  //     year: this.year,
  //     stillWorking: this.stillWorking,
  //     none: this.none
  //   };

  //   // Call the service method to submit form data to the backend
  //   this.cvService.submitExperienceFormData(formData).subscribe(
  //     (response) => {
  //       console.log('Form data submitted successfully:', response);
  //       // Optionally, reset form fields after successful submission
  //       this.jobTitle = '';
  //       this.companyName = '';
  //       this.year = '';
  //       this.stillWorking = false;
  //       this.none = false;
  //     },
  //     (error) => {
  //       console.error('Error submitting form data:', error);
  //     }
  //   );
  // }
}
