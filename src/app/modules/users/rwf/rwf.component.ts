import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { Router, RouteConfigLoadEnd, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-rwf',
  templateUrl: './rwf.component.html',
  styleUrls: ['./rwf.component.css']
})
export class RwfComponent implements OnInit {

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
