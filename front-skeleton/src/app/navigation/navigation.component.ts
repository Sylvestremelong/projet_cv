import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navigation', // Change this to 'app-navigation'
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})


export class NavigationComponent  implements OnInit{
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  moveToPersonal(){
    this.router.navigate(['/']);
    localStorage.clear();
  }

  moveToExperience(){
    this.router.navigate(['/experience']);
  }

  moveToEducation(){
    this.router.navigate(['/education']);
  }

  moveToSkills(){
    this.router.navigate(['/skills']);
  }
}
