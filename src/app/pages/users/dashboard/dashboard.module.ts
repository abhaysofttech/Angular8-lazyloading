import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { AllreportComponent } from './allreport/allreport.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import { TwentyFiveWindowRatingWithWeightageComponent } from 'src/app/shared/components/twenty-five-window-rating-with-weightage/twenty-five-window-rating-with-weightage.component';
import { LoadingSpinnerComponent } from 'src/app/shared/components/loading-spinner/loading-spinner.component';
import { SharedModule } from 'src/app/shared/shared.module';
FusionChartsModule.fcRoot(FusionCharts, Charts, TimeSeries);


@NgModule({
    declarations:[
        DashboardComponent,
        AllreportComponent,
        TwentyFiveWindowRatingWithWeightageComponent,
        // LoadingSpinnerComponent
    ],
    imports:[
        DashboardRoutingModule,
        FusionChartsModule,
        CommonModule,
        SharedModule
    ],
    exports:[TwentyFiveWindowRatingWithWeightageComponent]
})
export class DashboardModule{}