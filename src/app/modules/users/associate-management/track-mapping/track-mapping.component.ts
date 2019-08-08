import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import 'ag-grid-enterprise';


@Component({
  selector: 'app-track-mapping',
  templateUrl: './track-mapping.component.html',
  styleUrls: ['./track-mapping.component.css']
})
export class TrackMappingComponent  {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowSelection;
  private autoGroupColumnDef;
  private rowData:[];
  constructor(private http: HttpClient) {
    this.columnDefs = [{
      headerName: "Staff No.",
      field: "staff_no",
      width: 100,
      rowGroupIndex: 0
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
  ]
  
    this.defaultColDef = { filter: true };
    this.rowSelection = "multiple";
    this.autoGroupColumnDef = {
      headerName: "Role",
      field: "role",
      width: 200,
      cellRenderer: "agGroupCellRenderer",
      cellRendererParams: { checkbox: true }
    };
  }

  filterSwimming() {
    this.gridApi.setFilterModel({ sport: ["Swimming"] });
  }

  ages16And20() {
    this.gridApi.setFilterModel({
      age: ["16", "20"]
    });
  }

  clearFilter() {
    this.gridApi.setFilterModel(null);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        "app/modal/associate.json"
      )
      .subscribe((data: []) => {
        this.rowData = data;
      });
  }
}
 