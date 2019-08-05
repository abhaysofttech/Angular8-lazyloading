import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RwfManagementComponent } from './rwf-management/rwf-management.component';
import { DemandForecastingComponent } from './demand-forecasting/demand-forecasting.component';
import { RwfComponent } from './rwf.component';

const RwfRoutes: Routes = [
    {
        path: '',
        component: RwfComponent,
        children: [
            { path: 'demand', component: DemandForecastingComponent },
            { path: 'rwf-management', component: RwfManagementComponent }
        ]

    }
]

@NgModule({
    imports: [RouterModule.forChild(RwfRoutes)],
    exports:[RouterModule]

})
export class RwfRoutingModule { }