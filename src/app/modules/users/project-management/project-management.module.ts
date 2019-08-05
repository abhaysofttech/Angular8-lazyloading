import { NgModule } from '@angular/core';
import { ProjectManagementComponent } from './project-management.component';
import { ProjectManagementRoutingModule } from './project-management-routing.module';

import { CommonModule } from '@angular/common';
import { BaselineConfigComponent } from './baseline-config/baseline-config.component';
import { ProjectConfigComponent } from './project-config/project-config.component';

@NgModule({
    declarations:[
        ProjectManagementComponent,

        BaselineConfigComponent,
        ProjectConfigComponent
    ],
    imports:[
        ProjectManagementRoutingModule,CommonModule
    ],
    exports:[]
})
export class ProjectManagementModule{}