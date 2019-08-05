import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';
import { SidebarCmpComponent } from 'src/app/shared/components/sidebar-cmp/sidebar-cmp.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

import { UsersRoutingModule } from './users-routing.module';



import { ProjectManagementComponent } from './project-management/project-management.component';
import { ProjectConfigComponent } from './project-management/project-config/project-config.component';
import { BaselineConfigComponent } from './project-management/baseline-config/baseline-config.component';
import { AssociateManagementComponent } from './associate-management/associate-management.component';
import { RwfComponent } from './rwf/rwf.component';
import { DemandForecastingComponent } from './rwf/demand-forecasting/demand-forecasting.component';
import { RwfManagementComponent } from './rwf/rwf-management/rwf-management.component';
import { RwfTransactionComponent } from './rwf/rwf-transaction/rwf-transaction.component';


@NgModule({
    declarations: [
        SidebarCmpComponent,
        HeaderComponent,
        UsersComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule
    ],
    exports: [
        UsersComponent,
        SidebarCmpComponent,

    ]
})
export class UsersModule { }