import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PersonalInfoComponent } from './personal-info.component';
import { CertificationDetailsComponent } from './certification-details/certification-details.component';
import { AccoladesComponent } from './accolades/accolades.component';
import { DomainKnowledgeComponent } from './domain-knowledge/domain-knowledge.component';
import { TechnicalDetailsComponent } from './technical-details/technical-details.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';


const PersonalInfoRoutes: Routes = [
    {
        path: '',
        component: PersonalInfoComponent,
        children: [
            { path: 'details', component: PersonalDetailsComponent },
            { path: 'certificate', component: CertificationDetailsComponent },
            { path: 'accolades', component: AccoladesComponent },
            { path: 'domain', component: DomainKnowledgeComponent },
            { path: 'technical', component: TechnicalDetailsComponent },
            { path: 'travel', component: TravelDetailsComponent }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(PersonalInfoRoutes)],
    exports: [RouterModule]
})
export class PersonalInfoRoutingModule { }