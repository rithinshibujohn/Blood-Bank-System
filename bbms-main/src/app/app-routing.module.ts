import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DonorregisterComponent } from './pages/donorregister/donorregister.component';
import { LoginComponent } from './pages/login/login.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BloodbankComponent } from './pages/bloodbank/bloodbank.component';
import { RequestComponent } from './pages/request/request.component';
import { SingleComponent } from './pages/single/single.component';
import { WorksComponent } from './pages/works/works.component';
import { Single1Component } from './pages/single1/single1.component';
import { AngularFireAuthGuard,redirectUnauthorizedTo,redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
// import { AngularFireAuth } from '@angular/fire/compat/auth';

const redirectUnauthorizedToLogin = ( )=> redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['home']);


const routes: Routes = [
  {
    path:'' ,redirectTo:'login',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe:redirectUnauthorizedToLogin}
  },
  {
    path:'contact',component:ContactComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe:redirectUnauthorizedToLogin}
  },
  {
    path:'donorregister',component:DonorregisterComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe:redirectLoggedInToItems}
  },
  {
    path:'login',component:LoginComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe:redirectLoggedInToItems }
  },
  {
    path:'faq',component:FaqComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe:redirectUnauthorizedToLogin}
  },
  {
    path:'bloodbank',component:BloodbankComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe:redirectUnauthorizedToLogin}
  },
  {
    path:'request',component:RequestComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe:redirectUnauthorizedToLogin}
  },
  {
    path:'single',component:SingleComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe:redirectUnauthorizedToLogin}
  },
  {
    path:'works',component:WorksComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe:redirectUnauthorizedToLogin}
  },
  {
    path:'single1',component:Single1Component,canActivate: [AngularFireAuthGuard],data: { authGuardPipe:redirectUnauthorizedToLogin}
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
