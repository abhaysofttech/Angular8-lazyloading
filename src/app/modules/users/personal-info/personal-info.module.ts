import { NgModule } from '@angular/core';
import { AccoladesComponent } from './accolades/accolades.component';
import { CertificationDetailsComponent } from './certification-details/certification-details.component';
import { DomainKnowledgeComponent } from './domain-knowledge/domain-knowledge.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { TechnicalDetailsComponent } from './technical-details/technical-details.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { PersonalInfoRoutingModule } from './personal-info-routing.module';
import { PersonalInfoComponent } from './personal-info.component';

@NgModule({
    declarations: [
        AccoladesComponent,
        CertificationDetailsComponent,
        DomainKnowledgeComponent,
        PersonalDetailsComponent,
        TechnicalDetailsComponent,
        TravelDetailsComponent,
        PersonalInfoComponent

    ],
    imports: [PersonalInfoRoutingModule],
    exports: [
        AccoladesComponent,
        CertificationDetailsComponent,
        DomainKnowledgeComponent,
        PersonalDetailsComponent,
        TechnicalDetailsComponent,
        TravelDetailsComponent
    ]

})

export class PersonalinfoModule { }