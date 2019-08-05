import { NgModule } from '@angular/core';
import { AssociateManagementroutingModule } from './associate-management-routing.module';

import { AssociateManagementComponent } from './associate-management.component';
import { AssociateEvaluateComponent } from './associate-evaluate/associate-evaluate.component';
import { ReleaseResignationComponent } from './release-resignation/release-resignation.component';
import { ImprovementPlanComponent } from './improvement-plan/improvement-plan.component';
import { TrainingStatusComponent } from './training-status/training-status.component';
import { TrackMappingComponent } from './track-mapping/track-mapping.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AssociateManagementComponent,

        TrackMappingComponent,
        AssociateEvaluateComponent,
        ReleaseResignationComponent,
        ImprovementPlanComponent,
        TrainingStatusComponent
    ],
    imports: [
        AssociateManagementroutingModule, CommonModule
    ],
    exports: [],
})
export class AssociateManagementModule { }