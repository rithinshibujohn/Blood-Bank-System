import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string=''
  pass:string=''
  
  constructor(private fireS:FireService) {}
  submit(){
    this.validation()
    let loginDetails={
      email:this.email,
      pass:this.pass
    }
    this.fireS.loginfn(this.email,this.pass)

    this.email=''
    this.pass=''
  
}
validation()
{
  if(this.email==='')
  {
    alert('please enter your email')
  }
  else if(this.pass==='')
  {
    alert('please enter your password')
  }
}
}