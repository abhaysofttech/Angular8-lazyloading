import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.css']
})
export class ProjectManagementComponent implements OnInit {

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
