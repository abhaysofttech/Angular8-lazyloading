import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twenty-five-window-rating-with-weightage',
  templateUrl: './twenty-five-window-rating-with-weightage.component.html',
  styleUrls: ['./twenty-five-window-rating-with-weightage.component.scss']
})
export class TwentyFiveWindowRatingWithWeightageComponent implements OnInit {

  @Input() weightageData:any;
  @Input() title25w:string;
  constructor() { }

  ngOnInit() {
  }

}
