import { Component } from '@angular/core';
import { FireService } from '../fire.service';
import {AngularFireAuth} from '@angular/fire/compat/auth'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userEmail:any

  constructor(private fs:FireService,public afa:AngularFireAuth){}
  
  ngOnInit() {
    this.afa.user.subscribe(u => {
      this.userEmail=u?.email
    })
  }
    signout()
    {
      this.fs.signout1()
    }
  }
