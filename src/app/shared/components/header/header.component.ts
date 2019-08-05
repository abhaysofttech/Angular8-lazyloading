import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  collapse(){
    console.log('click');
   // $("body").addClass("sidebar-mini");
    if($('body').hasClass('sidebar-mini')){
      $('body').removeClass('sidebar-mini')
   }else{
      $('body').addClass('sidebar-mini')
   }
  }
}
