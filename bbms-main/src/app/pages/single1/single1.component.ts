import { Component } from '@angular/core';
import { Hero1Service } from 'src/app/hero1.service';
// import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-single',
  templateUrl: './single1.component.html',
  styleUrls: ['./single1.component.css']
})
export class Single1Component {

  constructor(private hero1:Hero1Service) {}

  data=this.hero1.giveData()
    single1:any
  

  ngOnInit(){
    let id = Number(localStorage.getItem('id'))
    this.single1 =this.data.filter(e=>e.id===id)
    console.log("name",this.single1)
  }

}

