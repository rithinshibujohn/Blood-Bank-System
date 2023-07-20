import { Injectable } from '@angular/core';
import {Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut}from '@angular/fire/auth'
import {Firestore,collection,doc,addDoc,setDoc} from '@angular/fire/firestore'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private auth:Auth,private fire:Firestore,private router:Router) { }


  //registration
  registration(userDetails:any)
  {
      createUserWithEmailAndPassword(this.auth,userDetails.email,userDetails.password).then(res=>{
        // const uid=res.user.uid;
        // const usercollection = doc(this.fires,'users',uid)
        // let user={
        //   "name":userDetails.name,
        //   "username":userDetails.username,
        //   "email":userDetails.email,
        //   "bloodgroup":userDetails.bloodgroup,
        //   "password":userDetails.pass,
        //   "confirmpass":userDetails.cpass
        // }
        // setDoc(usercollection,user).then((res) =>{
        //   console.log(res);
          alert('Registration completed successfully')
          this.router.navigate(['/home'])
        }).catch((err) =>{
         console.log(err);
          
        })
      //   console.log(res.user.uid,res.user.email);
      // }).catch(err=>{
      //   console.log(err);
      // })
  }
  loginfn(email:string,pass:string){
    signInWithEmailAndPassword(this.auth,email,pass).then(res=>{
      alert("login successfully")
      this.router.navigate(['/home'])
      
    }).catch(err=>{
      alert(err)
    })
        
  }
  signout1()
  {
    signOut(this.auth).then(res=>{
      alert('signed out successfully')
      this.router.navigate(['/login']);
    }).catch((err)=>
    {
      alert(err)
    }
    )

  }
  contact(data:any) {
    const contactCollection=collection(this.fire,'contactDetails')
  addDoc(contactCollection,data).then(res=>{
    alert("data added successfully")
    
    
  }).catch(err=>{
    alert(err)
  })
  }

  request(data:any) {
    const requestCollection=collection(this.fire,'requestDetails')
  addDoc(requestCollection,data).then(res=>{
    alert("data added successfully")
    
    
  }).catch(err=>{
    alert(err)
  })
  }
}