import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/users/login/login.component';
import { PersonalInfoComponent } from './modules/users/personal-info/personal-info.component';
import { UsersComponent } from './modules/users/users.component';
import { CertificationDetailsComponent } from './modules/users/personal-info/certification-details/certification-details.component';
import { ProjectConfigComponent } from './modules/users/project-management/project-config/project-config.component';
import { AssociateEvaluateComponent } from './modules/users/associate-management/associate-evaluate/associate-evaluate.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
   component:LoginComponent
  // loadChildren:() => import('../app/modules/users/login/')
  },
  {
    path:'user',
    loadChildren:() => import('./modules/users/users.module').then(m => m.UsersModule) 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }