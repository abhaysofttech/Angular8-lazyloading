import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { commonService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-demand-forecasting',
  templateUrl: './demand-forecasting.component.html',
  styleUrls: ['./demand-forecasting.component.css']
})
export class DemandForecastingComponent implements OnInit {
  private columnDefs;
  private rowData;
  public empRole: string;
  public empNumber: string;
  public listData: any;
  userData: any;
  constructor(private api: ApiService, private _data: commonService) {
    this.columnDefs = [
      {
        headerName: "Demand ID",
        field: "demfcastid",
        width: 100,
        cellRenderer: "agGroupCellRenderer"
      },
      {
        headerName: "Opportunity Id",
        field: "opportunityidsfdc",
        width: 100
      },
      {
        headerName: "Opportunity Desc",
        field: "opportunitydesc",
        width: 100
      },
      {
        headerName: "Client Manager",
        field: "clientmanager",
        width: 200
      }, {
        headerName: "Customer Dept/Program",
        field: "customerdept",
        width: 100
      }, {
        headerName: "Assigned To",
        field: "assignee",
        width: 200
      },
      {
        headerName: "Created By(EM)",
        field: "emstaffid",
        width: 100
      },
      {
        headerName: "Created On",
        field: "creationdate",
        width: 100
      },
      {
        headerName: "Offshore Delivery Center Head",
        field: "odch",
        width: 100
      },
      {
        headerName: "Engagement Manager",
        field: "emstaffid",
        width: 100
      },
      {
        headerName: "Onsite Delivery Head",
        field: "odmstaffid",
        width: 100
      },
      {
        headerName: "Delivery Head",
        field: "dhstaffid",
        width: 100
      },
      {
        headerName: "Program Manager",
        field: "pgmstaffid",
        width: 100
      },
      {
        headerName: "Skill Family",
        field: "skillfamily",
        width: 100
      },
      {
        headerName: "Primary Skill",
        field: "primaryskillset",
        width: 100
      },
      {
        headerName: "Secondary Skill",
        field: "secondaryskillset",
        width: 100
      },
      {
        headerName: "Location",
        field: "location",
        width: 100
      },
      {
        headerName: "Date Demand Received",
        field: "demandreceiveddate",
        width: 100
      },
      {
        headerName: "Ramp Down(Yes/No)",
        field: "rampdown",
        width: 100
      },
      {
        headerName: "Demand Status",
        field: "demandstatus",
        width: 100
      },
      {
        headerName: "Remark",
        field: "remarks",
        width: 100
      },
      {
        headerName: "Probability (in %)",
        field: "probability",
        width: 100
      },
      {
        headerName: "No of Position",
        field: "numberofpositions",
        width: 100
      },
      {
        headerName: "Total Billing loss(in $)",
        field: "billing_loss_days",
        width: 100
      },
      {
        headerName: "Total Billing loss(in Days)",
        field: "billing_loss_days",
        width: 100
      },
      {
        headerName: "Billing Rate",
        field: "billingrate",
        width: 100
      },
      {
        headerName: "Fulfilled Status",
        field: "numberofpositionsfilled",
        width: 100
      },
      {
        headerName: "Billing Start Date",
        field: "billingstartdate",
        width: 100
      }
    ];
    this.rowData = [
      {
        "demand_id": "17",
        "opportunity_id": "hs201",
        "opportunity_desc": "Java EE",
        "client_manager": "James",
        "customer_dept": "CE",
        "assigned_to": "KARTHIKEYAN SELVAM	",
        "created_by": "AMIT GROVER",
        "created_on": "2018-12-24	",
        "offshore_delivery_CH": "AVINASH PANDURANG KALE",
        "eng_manager": "AMIT GROVER",
        "onsite_delivery_head": "",
        "delivery_head": "SANDEEP S DESHMUKH",
        "program_manager": "GIRISH KUMAR PUROHIT",
        "skill_family": "Java",
        "primary_skill": "Spring",
        "secondary_skill": "MongoDB",
        "location": "UK",
        "date_demand_received": "2018-12-18",
        "ramp_down": "NO",
        "demand_status": "Open",
        "remark": "Created Demand",
        "probability": "70",
        "no_of_position": "1",
        "total_billing_loss_$": "",
        "total_billing_loss_days": "",
        "billing_rate": "85",
        "fulfilled_status": "100.00",
        "Billing Start Date": "2018-12-31",

      },
      {
        "demand_id": "17",
        "opportunity_id": "hs201",
        "opportunity_desc": "Java EE",
        "client_manager": "James",
        "customer_dept": "CE",
        "assigned_to": "KARTHIKEYAN SELVAM	",
        "created_by": "AMIT GROVER",
        "created_on": "2018-12-24	",
        "offshore_delivery_CH": "AVINASH PANDURANG KALE",
        "eng_manager": "AMIT GROVER",
        "onsite_delivery_head": "",
        "delivery_head": "SANDEEP S DESHMUKH",
        "program_manager": "GIRISH KUMAR PUROHIT",
        "skill_family": "Java",
        "primary_skill": "Spring",
        "secondary_skill": "MongoDB",
        "location": "UK",
        "date_demand_received": "2018-12-18",
        "ramp_down": "NO",
        "demand_status": "Open",
        "remark": "Created Demand",
        "probability": "70",
        "no_of_position": "1",
        "total_billing_loss_$": "",
        "total_billing_loss_days": "",
        "billing_rate": "85",
        "fulfilled_status": "100.00",
        "Billing Start Date": "2018-12-31",

      },
      {
        "demand_id": "17",
        "opportunity_id": "hs201",
        "opportunity_desc": "Java EE",
        "client_manager": "James",
        "customer_dept": "CE",
        "assigned_to": "KARTHIKEYAN SELVAM	",
        "created_by": "AMIT GROVER",
        "created_on": "2018-12-24	",
        "offshore_delivery_CH": "AVINASH PANDURANG KALE",
        "eng_manager": "AMIT GROVER",
        "onsite_delivery_head": "",
        "delivery_head": "SANDEEP S DESHMUKH",
        "program_manager": "GIRISH KUMAR PUROHIT",
        "skill_family": "Java",
        "primary_skill": "Spring",
        "secondary_skill": "MongoDB",
        "location": "UK",
        "date_demand_received": "2018-12-18",
        "ramp_down": "NO",
        "demand_status": "Open",
        "remark": "Created Demand",
        "probability": "70",
        "no_of_position": "1",
        "total_billing_loss_$": "",
        "total_billing_loss_days": "",
        "billing_rate": "85",
        "fulfilled_status": "100.00",
        "Billing Start Date": "2018-12-31",

      },
      {
        "demand_id": "17",
        "opportunity_id": "hs201",
        "opportunity_desc": "Java EE",
        "client_manager": "James",
        "customer_dept": "CE",
        "assigned_to": "KARTHIKEYAN SELVAM	",
        "created_by": "AMIT GROVER",
        "created_on": "2018-12-24	",
        "offshore_delivery_CH": "AVINASH PANDURANG KALE",
        "eng_manager": "AMIT GROVER",
        "onsite_delivery_head": "",
        "delivery_head": "SANDEEP S DESHMUKH",
        "program_manager": "GIRISH KUMAR PUROHIT",
        "skill_family": "Java",
        "primary_skill": "Spring",
        "secondary_skill": "MongoDB",
        "location": "UK",
        "date_demand_received": "2018-12-18",
        "ramp_down": "NO",
        "demand_status": "Open",
        "remark": "Created Demand",
        "probability": "70",
        "no_of_position": "1",
        "total_billing_loss_$": "",
        "total_billing_loss_days": "",
        "billing_rate": "85",
        "fulfilled_status": "100.00",
        "Billing Start Date": "2018-12-31",

      },
      {
        "demand_id": "17",
        "opportunity_id": "hs201",
        "opportunity_desc": "Java EE",
        "client_manager": "James",
        "customer_dept": "CE",
        "assigned_to": "KARTHIKEYAN SELVAM	",
        "created_by": "AMIT GROVER",
        "created_on": "2018-12-24	",
        "offshore_delivery_CH": "AVINASH PANDURANG KALE",
        "eng_manager": "AMIT GROVER",
        "onsite_delivery_head": "",
        "delivery_head": "SANDEEP S DESHMUKH",
        "program_manager": "GIRISH KUMAR PUROHIT",
        "skill_family": "Java",
        "primary_skill": "Spring",
        "secondary_skill": "MongoDB",
        "location": "UK",
        "date_demand_received": "2018-12-18",
        "ramp_down": "NO",
        "demand_status": "Open",
        "remark": "Created Demand",
        "probability": "70",
        "no_of_position": "1",
        "total_billing_loss_$": "",
        "total_billing_loss_days": "",
        "billing_rate": "85",
        "fulfilled_status": "100.00",
        "Billing Start Date": "2018-12-31",

      }
    ]

  }

  ngOnInit() {
    this._data.currentData.subscribe(
      currentData => {
        this.userData = currentData
      }
    )
    // Api call to get Demand list data
    this.getDemandListData();
  }



  getDemandListData() {
    this.empRole = this.userData.role;
    this.empNumber = this.userData.staffNo;
    this.api.demandList('',  this.empNumber,this.empRole)
      .then((response: any) => {
        console.log(response);
        // this.demandListResponse = JSON.parse(response.data);
        // console.log('Demand List Response -> ', this.demandListResponse)

         this.listData = response.matrixEmpDetails;

      })
      .catch((error) => {
        console.log(error)
        // Dismiss the loader
        //  this.dismissLoader();
        // Show alert with error message
        //  this.showAlert(Constants.ERROR_TITLE, Constants.ERROR_MESSAGE);
      })
  }
}
