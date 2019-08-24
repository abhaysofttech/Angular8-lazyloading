import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { Router, NavigationEnd } from '@angular/router';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-associate-management',
  templateUrl: './associate-management.component.html',
  styleUrls: ['./associate-management.component.css']
})
export class AssociateManagementComponent implements OnInit {

  @Input() breadCrumb: string;
 
  
  constructor(private breadCrumbData: BreadcrumbService, private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.breadCrumb =  this.breadCrumbData.breadcrumb;
      }
    });

    
   }


  ngOnInit() {
  }

}
