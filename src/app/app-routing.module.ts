import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/users/login/login.component';
import { PersonalInfoComponent } from './pages/users/personal-info/personal-info.component';
import { UsersComponent } from './pages/users/users.component';
import { CertificationDetailsComponent } from './pages/users/personal-info/certification-details/certification-details.component';
import { ProjectConfigComponent } from './pages/users/project-management/project-config/project-config.component';
import { AssociateEvaluateComponent } from './pages/users/associate-management/associate-evaluate/associate-evaluate.component';
import { TwentyFiveWindowRatingWithWeightageComponent } from './shared/components/twenty-five-window-rating-with-weightage/twenty-five-window-rating-with-weightage.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/user/dashboard/details',
    pathMatch:'full'
  },
  {
    path:'login',
   component:LoginComponent
  // loadChildren:() => import('../app/pages/users/login/')
  },
  {
    path:'user',
    loadChildren:() => import('./pages/users/users.module').then(m => m.UsersModule) 
  }
  // ,
  // {
  //   path:'25w',
  //   component:TwentyFiveWindowRatingWithWeightageComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }