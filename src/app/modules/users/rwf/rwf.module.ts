import { NgModule } from '@angular/core';
import { RwfRoutingModule } from './rwf-routing.module';

import { DemandForecastingComponent } from './demand-forecasting/demand-forecasting.component';
import { RwfComponent } from './rwf.component';
import { RwfManagementComponent } from './rwf-management/rwf-management.component';
import { CommonModule } from '@angular/common';
import { DemandAssignmentComponent } from './demand-assignment/demand-assignment.component';
import { RwfDashboardComponent } from './rwf-dashboard/rwf-dashboard.component';
import { RwfTransactionComponent } from './rwf-transaction/rwf-transaction.component';

@NgModule({
    declarations: [
        RwfComponent,

        DemandForecastingComponent,
        RwfManagementComponent,
        DemandAssignmentComponent,
        RwfDashboardComponent,
        RwfTransactionComponent
    ],
    imports: [
        RwfRoutingModule,CommonModule
    ],
    exports: []
})
export class RwfModule { }