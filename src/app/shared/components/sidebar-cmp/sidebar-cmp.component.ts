import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { Router } from '@angular/router';
declare interface RouteInfo {
  path: string;
  title: string;
  id:string;
  icon: string;
  class: string;
  submenu?: any
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard', title: 'Dashboard', id:'dashboard', icon: 'dashboard', class: 'active',
    submenu: [{ path: '/', title: 'Span of Control', icon: 'widgets', class: '' },
    { path: '/', title: 'Knowledge Drain', icon: 'how_to_vote', class: '' },
    { path: '/', title: 'Visa Status', icon: 'class', class: '' },
    { path: '/', title: 'Skill Mapping (My Team)', icon: 'assignment', class: '' },
    { path: '/', title: 'Niche Skills', icon: 'how_to_reg', class: '' }]
  },
  {
    path: '/', title: 'Project Management',id:'prdMgmt', icon: 'person', class: '',
    submenu: [{ path: '/user/project/config', title: 'Project Configuration', icon: 'person', class: '' },
    { path: '/user/project/baseline', title: '25W BaseLine Configuration', icon: 'person', class: '' },
    { path: '/', title: 'Create New Task', icon: 'person', class: '' }
    ]
  },
  {
    path: '/table-list', title: 'Associates Management', id:'AssMgmt', icon: 'group', class: '',
    submenu: [{ path: '/user/associate/track', title: 'Associate Track Mapping', icon: 'person', class: '' },
    { path: '/user/associate/evaluate', title: 'Evaluate Associates', icon: 'person', class: '' },
    { path: '/user/associate/release', title: 'Release /  Resignation', icon: 'person', class: '' },
    { path: '/user/associate/improvement', title: 'Improvement Plan', icon: 'person', class: '' },
    { path: '/user/associate/training', title: 'Training Status', icon: 'person', class: '' }
    ]
  },
  {
    path: '/table-list', title: 'RWF', id:'RWF', icon: 'event_note', class: '',
    submenu: [{ path: '/user/rwf/demand', title: 'Demand Forecasting', icon: 'person', class: '' },
    { path: '/user/rwf/rwf-management', title: 'RWF Management', icon: 'person', class: '' },
    { path: '/', title: 'My RWF transaction', icon: 'person', class: '' }
    ]
  },
  {
    path: '/table-list', title: 'Personal Info', id:'profile', icon: 'mood', class: '',
    submenu: [{ path: '/user/personal/details', title: 'Profile Update', icon: 'person', class: '' }
    ]
  }, 
  {
    path: '/table-list', title: 'Search Engine', id:'search', icon: 'search', class: '',
    submenu: [{ path: '/', title: 'Advance Search', icon: 'person', class: '' },
    { path: '/', title: 'Search By Associate', icon: 'person', class: '' }
    ]
  },
  {
    path: '/table-list', title: 'Directory', id:'search', icon: 'folder', class: ''
  },
];
@Component({
  selector: 'app-sidebar-cmp',
  templateUrl: './sidebar-cmp.component.html',
  styleUrls: ['./sidebar-cmp.component.css']
})
export class SidebarCmpComponent implements OnInit {
  @Input() subMenuTitle: string;
  @Output() breadCrumb: EventEmitter<any> = new EventEmitter()

  // breadCrumbData:any ={
  //   subMenuTitle: this.subMenuTitle
  // }
  menuItems: any[];
  constructor(private breadcrumbData:BreadcrumbService) { 
    
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  setBreadcrumb(value: string){
    this.breadcrumbData.breadcrumb = value;
  }

}
