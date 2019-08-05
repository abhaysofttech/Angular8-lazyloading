import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociateManagementComponent } from './associate-management.component';

import { AssociateEvaluateComponent } from './associate-evaluate/associate-evaluate.component';
import { TrackMappingComponent } from './track-mapping/track-mapping.component';
import { ReleaseResignationComponent } from './release-resignation/release-resignation.component';
import { ImprovementPlanComponent } from './improvement-plan/improvement-plan.component';
import { TrainingStatusComponent } from './training-status/training-status.component';

const AssociateManagementRoutes: Routes = [
    {
        path: '',
        component: AssociateManagementComponent,
        children: [
            { path: 'track', component: TrackMappingComponent },
            { path: 'evaluate', component: AssociateEvaluateComponent },
            { path: 'release', component: ReleaseResignationComponent },
            { path: 'improvement', component: ImprovementPlanComponent },
            { path: 'training', component: TrainingStatusComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(AssociateManagementRoutes)],
    exports: [RouterModule]

})
export class AssociateManagementroutingModule { }