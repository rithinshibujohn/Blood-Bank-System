import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  fname:string=''
  lname:string=''
  email:string=''
  gender:string=''
  city:string=''
  bloodtype:string=''
  bloodunits:string=''
  phone:string=''
  constructor(private fireS:FireService){

  }
  request() {
  
    let info={
     fname:this.fname,
     lname:this.lname,
     email:this.email,
     gender:this.gender,
     city:this.city,
     bloodtype:this.bloodtype,
     bloodunits:this.bloodunits,
     phone:this.phone
    } 
   
   this.fireS.request(info)
   this.fname=''
   this.lname=''
   this.email=''
   this.gender=''
   this.city=''
   this.bloodtype=''
   this.bloodunits=''
   this.phone=''
   }

}
