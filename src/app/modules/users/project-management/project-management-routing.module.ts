import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectManagementComponent } from './project-management.component';

import { ProjectConfigComponent } from './project-config/project-config.component';
import { BaselineConfigComponent } from './baseline-config/baseline-config.component';



const ProjectManagementRoutes: Routes = [
    {
        path: '',
        component: ProjectManagementComponent,
        children: [
            { path: 'config', component: ProjectConfigComponent },
            { path: 'baseline', component: BaselineConfigComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(ProjectManagementRoutes)],
    exports: [RouterModule]
})
export class ProjectManagementRoutingModule { }