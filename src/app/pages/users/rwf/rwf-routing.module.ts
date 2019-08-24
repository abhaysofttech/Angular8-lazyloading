import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RwfManagementComponent } from './rwf-management/rwf-management.component';
import { DemandForecastingComponent } from './demand-forecasting/demand-forecasting.component';
import { RwfComponent } from './rwf.component';
import { RwfTransactionComponent } from './rwf-transaction/rwf-transaction.component';
import { DemandAssignmentComponent } from './demand-assignment/demand-assignment.component';
import { RwfDashboardComponent } from './rwf-dashboard/rwf-dashboard.component';

const RwfRoutes: Routes = [
    {
        path: '',
        component: RwfComponent,
        children: [
            { path: 'demandassign', component: DemandAssignmentComponent },
            { path: 'demandforcast', component: DemandForecastingComponent },
            { path: 'rwf-management', component: RwfManagementComponent },
            { path: 'transaction', component: RwfTransactionComponent },
            { path: 'assignment', component: DemandAssignmentComponent },
            { path: 'dashboard', component: RwfDashboardComponent }
        ]

    }
]

@NgModule({
    imports: [RouterModule.forChild(RwfRoutes)],
    exports: [RouterModule]

})
export class RwfRoutingModule { }