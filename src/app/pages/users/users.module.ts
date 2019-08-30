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
import { SpanControlComponent } from './dashboard/span-control/span-control.component';
import { ReporteesComponent } from './dashboard/reportees/reportees.component';
import { KnowledgeDrainComponent } from './dashboard/knowledge-drain/knowledge-drain.component';
import { VisaStatusComponent } from './dashboard/visa-status/visa-status.component';
import { SkillMappingComponent } from './dashboard/skill-mapping/skill-mapping.component';
import { NicheSkillsComponent } from './dashboard/niche-skills/niche-skills.component';
import { SkillMappingBuComponent } from './dashboard/skill-mapping-bu/skill-mapping-bu.component';
import { SkillMappingMyteamComponent } from './dashboard/skill-mapping-myteam/skill-mapping-myteam.component';
import { LogDetailsComponent } from './dashboard/log-details/log-details.component';
import { TestComponent } from './test/test.component';
import { TestdataComponent } from './testdata/testdata.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { FormsModule } from '@angular/forms';
// import{Ng2TableModule } from 'ng2-expanding-table'
import { RowContentComponent } from './testdata/testdata-content.component';
import { FilterPipe} from './filter.pipe';
import { LoadingSpinnerComponent } from 'src/app/shared/components/loading-spinner/loading-spinner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchFilterPipe } from './rwf/demand-forecasting/filter.pipe';


@NgModule({
    declarations: [
        SidebarCmpComponent,
        HeaderComponent,
        UsersComponent,
        SpanControlComponent,
        ReporteesComponent,
        KnowledgeDrainComponent,
        VisaStatusComponent,
        SkillMappingComponent,
        NicheSkillsComponent,
        SkillMappingBuComponent,
        SkillMappingMyteamComponent,
        LogDetailsComponent,
        TestComponent,
        TestdataComponent,
        RowContentComponent,
        FilterPipe,
        //SearchFilterPipe
       // LoadingSpinnerComponent
        
        
    ],
    imports: [
        CommonModule,Ng2TableModule,FormsModule,
        UsersRoutingModule,SharedModule
    ],
    exports: [
        UsersComponent,
        SidebarCmpComponent,

    ]
})
export class UsersModule { }