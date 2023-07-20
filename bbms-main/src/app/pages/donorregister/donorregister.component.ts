import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-donorregister',
  templateUrl: './donorregister.component.html',
  styleUrls: ['./donorregister.component.css']
})
export class DonorregisterComponent {
  name:any=''
  username:any=''
  email:any=''
  bloodgroup:any=''
  pass:any=''
  cpass:any=''
  constructor(private fs:FireService){

  }
  
  Register() {

    this.validation()
    let userDetails={
      name:this.name,
      username:this.username,
      email:this.email,
      bloodgroup:this.bloodgroup,
      password:this.pass,
      confirmpass:this.cpass
    }
    this.fs.registration(userDetails)
    this.name=''
    this.username=''
    this.email=''
    this.bloodgroup=''
    this.pass=''
    this.cpass=''
  }
  validation()
  {
    if(this.name==='')
    {
      alert('Please enter name')
    }
    else if(this.username==='')
    {
      alert('Please enter username')
    }
    else if(this.email==='')
    {
      alert('Please enter email')
    }
    else if(this.bloodgroup==='')
    {
      alert('Please enter bloodgroup')
    }
    else if(this.pass==='')
    {
      alert('Please enter password')
    }
    else if(this.cpass==='')
    {
      alert('Please enter confirm password')
    }
  }
 
    

  
}
