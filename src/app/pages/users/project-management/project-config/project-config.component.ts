import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-config',
  templateUrl: './project-config.component.html',
  styleUrls: ['./project-config.component.css']
})
export class ProjectConfigComponent implements OnInit {
  public actionsArr: any;
  constructor() { }

  ngOnInit() {
  this.actionsArr = 'Behavioral';

  }
  showRecommendedActions(i: any) {
  this.actionsArr = i;
  }

}
