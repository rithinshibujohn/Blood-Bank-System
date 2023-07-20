import { Component } from '@angular/core';
import { FireService } from '../fire.service';
import {AngularFireAuth} from '@angular/fire/compat/auth'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  userEmail:any

  constructor(private fs:FireService,public afa:AngularFireAuth){}
  
  ngOnInit() {
    this.afa.user.subscribe(u => {
      this.userEmail=u?.email
    })
  }


}
