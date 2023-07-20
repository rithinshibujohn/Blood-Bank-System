import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-bloodbank',
  templateUrl: './bloodbank.component.html',
  styleUrls: ['./bloodbank.component.css']
})
export class BloodbankComponent {
  constructor(private router:Router,private hero:HeroService) {}
  blood=this.hero.giveData();

  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/single']);
  }
}
