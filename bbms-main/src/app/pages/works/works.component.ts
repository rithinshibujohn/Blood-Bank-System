import { Component } from '@angular/core';
import { Hero1Service } from 'src/app/hero1.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  constructor(private router:Router,private hero1:Hero1Service) {}
  blood1=this.hero1.giveData();

  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/single1']);
  }
}
