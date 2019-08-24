import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AllreportComponent } from './allreport/allreport.component';


const DashboardRoutes : Routes =[
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: 'details', component: AllreportComponent }
        ]
    }
    
]
@NgModule({
    imports:[RouterModule.forChild(DashboardRoutes)],
    exports:[RouterModule]
})
export class DashboardRoutingModule{}