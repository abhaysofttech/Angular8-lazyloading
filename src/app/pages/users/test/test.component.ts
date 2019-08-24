import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryPipe } from './test.pipe';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  // private rowData:[];
  private rowData: any;
  active: any;
  isDesc: boolean = false;
  column: string 
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get(
        "app/modal/data.json"
      )
      .subscribe((data: any) => {
        /// console.log(data)
        this.rowData = data;
        this.rowData.filter(item => {
          item.active = false;
          if (item["children"] != undefined) {
            item.children.filter(subItem => {
              subItem.active = false;
            })
          }
        });
      });
  }

  showMinorData(i: any) {
    this.rowData[i].active = !this.rowData[i].active;
  }

  
  showSubMinorData(i:any,j: any) {
    this.rowData[i].children[j].active = !this.rowData[i].children[j].active;
  }
  sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.rowData.sort(function(a, b){
        if(a[property] < b[property]){
            return -1 * direction;
        }
        else if( a[property] > b[property]){
            return 1 * direction;
        }
        else{
            return 0;
        }
    });
};

}
