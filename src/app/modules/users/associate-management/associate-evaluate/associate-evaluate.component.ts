import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';


@Component({
  selector: 'app-associate-evaluate',
  templateUrl: './associate-evaluate.component.html',
  styleUrls: ['./associate-evaluate.component.css']
})
export class AssociateEvaluateComponent {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private rowData;
  private getNodeChildDetails;
  private rowClassRules;
  constructor() {
    this.columnDefs = [
      {
        headerName: "Staff No.",
        field: "staff_no",
        width: 100,
        cellRenderer: "agGroupCellRenderer"
            },
            {
              headerName: "Staff Name",
              field: "staff_name",
              width: 200
            },
            {
              headerName: "Role",
              field: "role",
              width: 200
            },
            {
              headerName: "Project Name",
              field: "project_name",
              width: 100
            }, {
              headerName: "Track Name",
              field: "track_name",
              width: 100
            }, {
              headerName: "View Rating History",
              field: "rating_history",
              width: 100
            },
            {
              headerName: "Rate Associate",
              field: "rate_ass",
              width: 100
            },
            {
              headerName: "Rate On",
              field: "rate_on",
              width: 100
            }
    ];
    this.rowData = [
      {
        "staff_no": "1",
        "staff_name": "Tiger Nixon",
        "role": "System Architect",
        "project_name": "$320,800",
        "track_name": "2011/04/25",
        "rating_history": "Edinburgh",
        "rate_ass": "5421",
        "rate_on": "5421",
        "participants": [
          {
            "staff_no": "Data2",
            "staff_name": "Garrett Winters",
            "role": "Accountant",
            "project_name": "$170,750",
            "track_name": "2011/07/25",
            "rating_history": "Tokyo",
            "rate_ass": "8422",
            "rate_on": "5421"
          }
        ]
      },
      {
        "staff_no": "2",
        "staff_name": "Garrett Winters",
        "role": "Accountant",
        "project_name": "$170,750",
        "track_name": "2011/07/25",
        "rating_history": "Tokyo",
        "rate_ass": "8422",
        "rate_on": "5421"
      },
      {
        "staff_no": "3",
        "staff_name": "Ashton Cox",
        "role": "Junior Technical Author",
        "project_name": "$86,000",
        "track_name": "2009/01/12",
        "rating_history": "San Francisco",
        "rate_ass": "1562",
        "rate_on": "5421",
        "participants": [
          {
            "staff_no": "2",
            "staff_name": "Garrett Winters",
            "role": "Accountant",
            "project_name": "$170,750",
            "track_name": "2011/07/25",
            "rating_history": "Tokyo",
            "rate_ass": "8422",
            "rate_on": "5421"
          }
        ]
      },
      {
        "staff_no": "4",
        "staff_name": "Cedric Kelly",
        "role": "Senior Javascript Developer",
        "project_name": "$433,060",
        "track_name": "2012/03/29",
        "rating_history": "Edinburgh",
        "rate_ass": "6224",
        "rate_on": "5421"
      },
      {
        "staff_no": "5",
        "staff_name": "Airi Satou",
        "role": "Accountant",
        "project_name": "$162,700",
        "track_name": "2008/11/28",
        "rating_history": "Tokyo",
        "rate_ass": "5407",
        "rate_on": "5421",
      },
      {
        "staff_no": "5",
        "staff_name": "Airi Satou",
        "role": "Accountant",
        "project_name": "$162,700",
        "track_name": "2008/11/28",
        "rating_history": "Tokyo",
        "rate_ass": "5407",
        "rate_on": "5421",
      },
      {
        "staff_no": "5",
        "staff_name": "Airi Satou",
        "role": "Accountant",
        "project_name": "$162,700",
        "track_name": "2008/11/28",
        "rating_history": "Tokyo",
        "rate_ass": "5407",
        "rate_on": "5421",
      },
      {
        "staff_no": "5",
        "staff_name": "Airi Satou",
        "role": "Accountant",
        "project_name": "$162,700",
        "track_name": "2008/11/28",
        "rating_history": "Tokyo",
        "rate_ass": "5407",
        "rate_on": "5421",
      },
      {
        "staff_no": "5",
        "staff_name": "Airi Satou",
        "role": "Accountant",
        "project_name": "$162,700",
        "track_name": "2008/11/28",
        "rating_history": "Tokyo",
        "rate_ass": "5407",
        "rate_on": "5421",
      },
      {
        "staff_no": "5",
        "staff_name": "Airi Satou",
        "role": "Accountant",
        "project_name": "$162,700",
        "track_name": "2008/11/28",
        "rating_history": "Tokyo",
        "rate_ass": "5407",
        "rate_on": "5421",
      },
      {
        "staff_no": "5",
        "staff_name": "Airi Satou",
        "role": "Accountant",
        "project_name": "$162,700",
        "track_name": "2008/11/28",
        "rating_history": "Tokyo",
        "rate_ass": "5407",
        "rate_on": "5421",
      },
      {
        "staff_no": "5",
        "staff_name": "Airi Satou",
        "role": "Accountant",
        "project_name": "$162,700",
        "track_name": "2008/11/28",
        "rating_history": "Tokyo",
        "rate_ass": "5407",
        "rate_on": "5421",
      },
      {
        "staff_no": "5",
        "staff_name": "Airi Satou",
        "role": "Accountant",
        "project_name": "$162,700",
        "track_name": "2008/11/28",
        "rating_history": "Tokyo",
        "rate_ass": "5407",
        "rate_on": "5421",
      },
      {
        "staff_no": "5",
        "staff_name": "Airi Satou",
        "role": "Accountant",
        "project_name": "$162,700",
        "track_name": "2008/11/28",
        "rating_history": "Tokyo",
        "rate_ass": "5407",
        "rate_on": "5421",
      },
      {
        "staff_no": "5",
        "staff_name": "Airi Satou",
        "role": "Accountant",
        "project_name": "$162,700",
        "track_name": "2008/11/28",
        "rating_history": "Tokyo",
        "rate_ass": "5407",
        "rate_on": "5421",
      },
      {
        "staff_no": "5",
        "staff_name": "Airi Satou",
        "role": "Accountant",
        "project_name": "$162,700",
        "track_name": "2008/11/28",
        "rating_history": "Tokyo",
        "rate_ass": "5407",
        "rate_on": "5421",
      },
      {
        "staff_no": "5",
        "staff_name": "Airi Satou",
        "role": "Accountant",
        "project_name": "$162,700",
        "track_name": "2008/11/28",
        "rating_history": "Tokyo",
        "rate_ass": "5407",
        "rate_on": "5421",
      },
      {
        "staff_no": "5",
        "staff_name": "Airi Satou",
        "role": "Accountant",
        "project_name": "$162,700",
        "track_name": "2008/11/28",
        "rating_history": "Tokyo",
        "rate_ass": "5407",
        "rate_on": "5421",
      },
      {
        "staff_no": "5",
        "staff_name": "Airi Satou",
        "role": "Accountant",
        "project_name": "$162,700",
        "track_name": "2008/11/28",
        "rating_history": "Tokyo",
        "rate_ass": "5407",
        "rate_on": "5421",
      }
    ]
    
    this.rowClassRules = {
      "sick-days-warning": function(params) {
        debugger;
      //  var numSickDays = params.data.sickDays;
        //return numSickDays > 5 && numSickDays <= 7;
        if (params.data.participants) {
              return "sick-days-breach"
            }
      },
      "sick-days-breach": "data.child"
    };

    // this.rowClassRules = function getNodeChildDetails(rowItem) {
    //   debugger;
    //   if (rowItem.participants) {
    //     return "sick-days-breach"
    //   }
    // }
    this.getNodeChildDetails = function getNodeChildDetails(rowItem) {
      if (rowItem.participants) {
        return {
          group: true,
          expanded: rowItem.group === "Group C",
          children: rowItem.participants,
          key: rowItem.group
        };
      } else {
        return null;
      }
    };
    
  }

  onTextboxFilterChanged() {
    // var value = document.getElementById("filter-textbox").value;
    // this.gridApi.setQuickFilter(value);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }

  onCellClicked($event) {
    console.log($event);
  }
  // datan = 1;
  // private gridOptions: GridOptions;

  // constructor() {
  //   this.gridOptions = <GridOptions>{};
  //   this.gridOptions.columnDefs = [
  //     {
  //       headerName: "Staff No.",
  //       field: "staff_no",
  //       width: 100
  //     },
  //     {
  //       headerName: "Staff Name",
  //       field: "staff_name",
  //       width: 200
  //     },
  //     {
  //       headerName: "Role",
  //       field: "role",
  //       width: 200
  //     },
  //     {
  //       headerName: "Project Name",
  //       field: "project_name",
  //       width: 100
  //     }, {
  //       headerName: "Track Name",
  //       field: "track_name",
  //       width: 100
  //     }, {
  //       headerName: "View Rating History",
  //       field: "rating_history",
  //       width: 100
  //     },
  //     {
  //       headerName: "Rate Associate",
  //       field: "rate_ass",
  //       width: 100
  //     },
  //     {
  //       headerName: "Rate On",
  //       field: "rate_on",
  //       width: 100
  //     }

  //   ];
  

  

}
