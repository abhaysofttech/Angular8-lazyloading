import { NgModule } from '@angular/core';
import { RwfRoutingModule } from './rwf-routing.module';

import { DemandForecastingComponent } from './demand-forecasting/demand-forecasting.component';
import { RwfComponent } from './rwf.component';
import { RwfManagementComponent } from './rwf-management/rwf-management.component';
import { CommonModule } from '@angular/common';
import { DemandAssignmentComponent } from './demand-assignment/demand-assignment.component';
import { RwfDashboardComponent } from './rwf-dashboard/rwf-dashboard.component';
import { RwfTransactionComponent } from './rwf-transaction/rwf-transaction.component';
import { AgGridModule } from 'ag-grid-angular';
import { LoadingSpinnerComponent } from 'src/app/shared/components/loading-spinner/loading-spinner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './demand-forecasting/filter.pipe';

@NgModule({
    declarations: [
        RwfComponent,

        DemandForecastingComponent,
        RwfManagementComponent,
        DemandAssignmentComponent,
        RwfDashboardComponent,
        RwfTransactionComponent,
        SearchFilterPipe
        // LoadingSpinnerComponent
    ],
    imports: [
        RwfRoutingModule,CommonModule,
        FormsModule,
        SharedModule,
        AgGridModule.withComponents([RwfComponent])
    ],
    exports: []
})
export class RwfModule { }