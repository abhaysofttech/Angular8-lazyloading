import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demand-assignment',
  templateUrl: './demand-assignment.component.html',
  styleUrls: ['./demand-assignment.component.css']
})
export class DemandAssignmentComponent implements OnInit {

  private columnDefs;
  private rowData;
  constructor() {
    this.columnDefs = [
      {
        headerName: "Demand ID",
        field: "demand_id",
        width: 100,
        cellRenderer: "agGroupCellRenderer"
      },
      {
        headerName: "Opportunity Id",
        field: "opportunity_id",
        width: 100
      },
      {
        headerName: "Opportunity Desc",
        field: "opportunity_desc",
        width: 100
      },
      {
        headerName: "Client Manager",
        field: "client_manager",
        width: 200
      }, {
        headerName: "Customer Dept/Program",
        field: "customer_dept",
        width: 100
      }, {
        headerName: "Assigned To",
        field: "assigned_to",
        width: 200
      },
      {
        headerName: "Created By(EM)",
        field: "created_by",
        width: 100
      },
      {
        headerName: "Created On",
        field: "created_on",
        width: 100
      },
      {
        headerName: "Offshore Delivery Center Head",
        field: "offshore_delivery_CH",
        width: 100
      },
      {
        headerName: "Engagement Manager",
        field: "eng_manager",
        width: 100
      },
      {
        headerName: "Onsite Delivery Head",
        field: "onsite_delivery_head",
        width: 100
      },
      {
        headerName: "Delivery Head",
        field: "delivery_head",
        width: 100
      },
      {
        headerName: "Program Manager",
        field: "program_manager",
        width: 100
      },
      {
        headerName: "Skill Family",
        field: "skill_family",
        width: 100
      },
      {
        headerName: "Primary Skill",
        field: "primary_skill",
        width: 100
      },
      {
        headerName: "Secondary Skill",
        field: "secondary_skill",
        width: 100
      },
      {
        headerName: "Location",
        field: "location",
        width: 100
      },
      {
        headerName: "Date Demand Received",
        field: "date_demand_received",
        width: 100
      },
      {
        headerName: "Ramp Down(Yes/No)",
        field: "ramp_down",
        width: 100
      },
      {
        headerName: "Demand Status",
        field: "demand_status",
        width: 100
      },
      {
        headerName: "Remark",
        field: "remark",
        width: 100
      },
      {
        headerName: "Probability (in %)",
        field: "probability",
        width: 100
      },
      {
        headerName: "No of Position",
        field: "no_of_position",
        width: 100
      },
      {
        headerName: "Total Billing loss(in $)",
        field: "total_billing_loss_$",
        width: 100
      },
      {
        headerName: "Total Billing loss(in Days)",
        field: "total_billing_loss_days",
        width: 100
      },
      {
        headerName: "Billing Rate",
        field: "billing_rate",
        width: 100
      },
      {
        headerName: "Fulfilled Status",
        field: "fulfilled_status",
        width: 100
      },
      {
        headerName: "Billing Start Date",
        field: "billing_start_date",
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
  }

}
