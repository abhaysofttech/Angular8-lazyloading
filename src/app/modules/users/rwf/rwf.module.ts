import { NgModule } from '@angular/core';
import { RwfRoutingModule } from './rwf-routing.module';

import { DemandForecastingComponent } from './demand-forecasting/demand-forecasting.component';
import { RwfComponent } from './rwf.component';
import { RwfManagementComponent } from './rwf-management/rwf-management.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        RwfComponent,

        DemandForecastingComponent,
        RwfManagementComponent
    ],
    imports: [
        RwfRoutingModule,CommonModule
    ],
    exports: []
})
export class RwfModule { }