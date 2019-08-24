import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { AllreportComponent } from './allreport/allreport.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries';
FusionChartsModule.fcRoot(FusionCharts, Charts, TimeSeries);


@NgModule({
    declarations:[
        DashboardComponent,
        AllreportComponent
    ],
    imports:[
        DashboardRoutingModule,
        FusionChartsModule,
        CommonModule
    ],
    exports:[]
})
export class DashboardModule{}