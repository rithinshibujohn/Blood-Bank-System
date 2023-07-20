import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name:string=''
  email:string=''
  message:string=''
  constructor(private fireS:FireService){

  }
  contact() {
  
    let info={
     name:this.name,
     email:this.email,
     message:this.message
    } 
   
   this.fireS.contact(info)
   this.name=''
   this.email=''
   this.message=''
   }

}
