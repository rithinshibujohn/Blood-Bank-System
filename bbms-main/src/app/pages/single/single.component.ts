import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
// import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {

  constructor(private hero:HeroService) {}

  data=this.hero.giveData()
    single:any
  

  ngOnInit(){
    let id = Number(localStorage.getItem('id'))
    this.single =this.data.filter(e=>e.id===id)
    console.log("name",this.single)
  }

}

