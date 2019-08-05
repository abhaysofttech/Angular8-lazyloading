import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { CertificationDetailsComponent } from './personal-info/certification-details/certification-details.component';
import { TravelDetailsComponent } from './personal-info/travel-details/travel-details.component';
import { TechnicalDetailsComponent } from './personal-info/technical-details/technical-details.component';
import { DomainKnowledgeComponent } from './personal-info/domain-knowledge/domain-knowledge.component';
import { AccoladesComponent } from './personal-info/accolades/accolades.component';
import { PersonalDetailsComponent } from './personal-info/personal-details/personal-details.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { ProjectConfigComponent } from './project-management/project-config/project-config.component';
import { BaselineConfigComponent } from './project-management/baseline-config/baseline-config.component';

const UsersRoute: Routes = [

    {
        path: '',
        component: UsersComponent,
        children: [
            {
                path: 'personal',
                loadChildren: () => import('./personal-info/personal-info.module').then(m => m.PersonalinfoModule)
            },
            {
                path: 'project',
                loadChildren:() => import('./project-management/project-management.module').then(m => m.ProjectManagementModule)
            },
            {
                path: 'associate',
                loadChildren: () => import('./associate-management/associate-management.module').then(m => m.AssociateManagementModule)
            },
            {
                path: 'rwf',
                loadChildren: () => import('./rwf/rwf.module').then(m => m.RwfModule)
            }

        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(UsersRoute)],
    exports: [RouterModule]

})
export class UsersRoutingModule { }