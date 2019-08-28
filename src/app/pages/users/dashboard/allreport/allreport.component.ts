import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { commonService } from 'src/app/services/shared.service';

const leadWideDistributionChartdata = {
  "chart": {
    //  "caption": "LEAD WISE DISTRIBUTION",
    "subcaption": "",
    "showvalues": "1",
    "valueFontColor": "#ffffff",
    "plotgradientcolor": "",
    "formatnumberscale": "0",
    "showplotborder": "0",
    "palettecolors": "#2BC18A ,#2095AE, #1485B4,#146397",
    "plottooltext": "$label produces $dataValue of energy from $seriesName",
    "canvaspadding": "1",
    "bgcolor": "FFFFFF",
    "showalternatehgridcolor": "1",
    "divLineDashed": "1",
    "divlinecolor": "FFF",
    "showcanvasborder": "0",
    "legendborderalpha": "0",
    "legendshadow": "0",
    "interactivelegend": "1",
    "showsum": "0",
    "canvasborderalpha": "0",
    "showborder": "0",
    "rotateValues": "0",
    "labelDisplay": "auto",
    "theme": "fusion",
    "minPlotHeightForValue": "1",
    "flatScrollBars": "1",
    "scrollheight": "10",
    "numVisiblePlot": "4",
    "showHoverEffect": "1",
    "scrollColor": "#3a4660",
  },
  "categories": [
    {
      "category": []
    }
  ],
  "dataset": [{ "seriesname": "", "renderas": "", "data": [] }],
};

const genderBreakUpChartdata = {

  chart: {
    // caption: "Gender Wise Break Up",
    plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    palettecolors: "5d62b5,29c3be,f2726f",
    theme: "fusion",
    bgColor: "#ffffff",
    showBorder: "0",
  },
  data: []
};
const overAllAssociatesChartdata = {
  "chart": {
    //  caption: "OVERALL ASSOCIATES",
    plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    palettecolors: "5d62b5,4b96c1,efa819,ccccc",
    theme: "fusion",
    bgColor: "#ffffff",
    showBorder: "0",
  },
  "data": []
};

// Data Chart for CEO view

const dhDataSet = {
  chart: {
    "subcaption": "",
    "showvalues": "1",
    "valueFontColor": "#ffffff",
    "plotgradientcolor": "",
    "formatnumberscale": "0",
    "showplotborder": "0",
    "palettecolors": "#2BC18A ,#2095AE, #1485B4,#146397",
    "plottooltext": "$label produces $dataValue of energy from $seriesName",
    "canvaspadding": "1",
    "bgcolor": "FFFFFF",
    "showalternatehgridcolor": "1",
    "divLineDashed": "1",
    "divlinecolor": "FFF",
    "showcanvasborder": "0",
    "legendborderalpha": "0",
    "legendshadow": "0",
    "interactivelegend": "1",
    "showsum": "0",
    "canvasborderalpha": "0",
    "showborder": "0",
    "rotateValues": "0",
    "labelDisplay": "auto",
    "theme": "fusion",
    "minPlotHeightForValue": "1",
    "flatScrollBars": "1",
    "scrollheight": "10",
    "numVisiblePlot": "12",
    "showHoverEffect": "1",
    "scrollColor": "#00a9e0"
  },
  "categories": [
    {
      "category": []
    }
  ],
  "dataset": [{ "seriesname": "", "renderas": "", "data": [] }],
};
// End the data for Data Chart

@Component({
  selector: 'app-allreport',
  templateUrl: './allreport.component.html',
  styleUrls: ['./allreport.component.scss']
})
export class AllreportComponent implements OnInit {

  public empRole: string;
  public empNumber: string;

  public accountName: string;
  totalAssociatesCount = 0;
  totalBillableCount = 0;
  totalNonBillableCount = 0;
  totalInTransitCount = 0;
  totalEbrCount = 0;
  totalInPollCount = 0;
  totalOnshoreCount = 0;
  totalOffshoreCount = 0;
  totalVisaUnusedCount = 0;
  onShoreUniqueLocations = [];
  offShoreUniqueLocations = [];
  onShoreLocation1Count = 0;
  onShoreLocation2Count = 0;
  onShoreLocation3Count = 0;
  offShoreLocation1Count = 0;
  offShoreLocation2Count = 0;
  offShoreLocation3Count = 0;


  buList: [] = [];
  public userSelectedBU: string;
  public totalAssociatesResponseData: any;
  public deliveryBillableResponseData: any;
  public nonBillalbleResponseData: any;
  public inTransitResponseData: any;
  public ebrResponseData: any;
  public poolResponseData: any;
  public onShoreResponseData: any;
  public offShoreResponeData: any;
  public visaResponseData: any;
  public tfwWithoutWeightageData: any[];
  public tfwWithoutWeightagePercentageData: any[];
  public tfwWithWeightageData: any[];
  public tfwWithWeightagePercentageData: any[];



  genderChartWidth = 600;
  genderChartWHeight = 400;
  genderChartType = 'pie2d';
  genderChartWDataFormat = 'json';
  genderChartWDataSource = genderBreakUpChartdata;
  leadWiseDistributionDataSource = leadWideDistributionChartdata;
  leadWiseDistributionChartType = 'scrollstackedcolumn2d';

  overAllAssociatesDataSource = overAllAssociatesChartdata;

  // assignment for the 


  dhWidth = 600;
  dhHeight = 400;
  dhType = "scrollcolumn2d";
  dhDataFormat = "json";
  dhDataSource = dhDataSet;

  userData :any;
  constructor(private api: ApiService, private _data: commonService) { }

  ngOnInit() {
    this._data.currentData.subscribe(
      currentData => {
        this.userData = currentData
      }
    )

    //overAllAssociatesDataSource

    // this.api.getDashboardDataForPGM1("text Data test")
    // .then((data: any) => { console.log(data) });
    this.empRole = this.userData.role;
    this.empNumber = this.userData.staffNo;


    this.api.login("", "PGM")
      .subscribe(response => {
        console.log(response);
      })
    this.api.getDashboardDataForPGM("", this.empRole, this.empNumber)
      .subscribe(response => {
        let genderData = response[0];
        let leadwiseDistributionData = response[1];
        let overAllAssociatesData = response[2];
        let twentyFiveWindowDataResponse = response[3];

        // Plot Gender graph
        this.genderChartWDataSource.data = [];
        for (let i = 0; i < genderData.genderChartData.length; i++) {
          this.genderChartWDataSource.data.push({
            label: genderData.genderChartData[i][0],
            value: genderData.genderChartData[i][1]
          })
        }

        // Plot OverAll Associates graph
        this.overAllAssociatesDataSource.data = [];
        let totalAssociatesCount: number = 0;
        let overAllAssociateObjectKeys = Object.keys(overAllAssociatesData.pieChartData);

        for (let i = 0; i < overAllAssociateObjectKeys.length; i++) {
          this.overAllAssociatesDataSource.data.push({
            "label": overAllAssociateObjectKeys[i],
            "value": overAllAssociatesData.pieChartData[overAllAssociateObjectKeys[i]]
          })
          totalAssociatesCount = totalAssociatesCount + overAllAssociatesData.pieChartData[overAllAssociateObjectKeys[i]];
        }
        // this.overAllAssociatesDataSource.chart.subcaption = "Total Count: " + totalAssociatesCount;
        debugger
        // Assign values to the variable
        this.tfwWithoutWeightageData = twentyFiveWindowDataResponse.withoutWeightage;
        this.tfwWithoutWeightagePercentageData = twentyFiveWindowDataResponse.withoutWeightagePercentage;
        this.tfwWithWeightageData = twentyFiveWindowDataResponse.withWeightage;
        this.tfwWithWeightagePercentageData = twentyFiveWindowDataResponse.withWeightagePercentage;


        // Plot Leadwise Distribution graph
        this.leadWiseDistributionDataSource.dataset = [];
        var graphdata = leadwiseDistributionData.barChartData;

        var dataByBU = [], totalCount: number = 0;
        var i, j, k;

        for (i in graphdata) {
          if (
            dataByBU[graphdata[i][2]] === undefined || dataByBU[graphdata[i][2]] === null
          ) {
            dataByBU[graphdata[i][2]] = [];
          }
          dataByBU[graphdata[i][2]][graphdata[i][0]] = graphdata[i][1];
          totalCount = totalCount + parseInt(graphdata[i][1]);
        }
        this.leadWiseDistributionDataSource.chart.subcaption = "Total Count: " + totalCount;

        this.leadWiseDistributionDataSource.categories[0].category = [];
        var categoryWiseData = [];
        var categories = ["Non-Rated", "Non-SME", "Potential-SME"];
        categoryWiseData["SME"] = [];
        categoryWiseData["Potential-SME"] = [];
        categoryWiseData["Non-SME"] = [];
        categoryWiseData["Non-Rated"] = [];

        function zeroOnNull(object) {
          if (object === undefined || object === null) {
            return "0";
          }
          return object;
        }

        for (i in dataByBU) {
          this.leadWiseDistributionDataSource.categories[0].category.push({
            label: i
          });

          categoryWiseData["Non-Rated"].push(
            zeroOnNull(dataByBU[i]["Non-Rated"])
          );
          categoryWiseData["Non-SME"].push(
            zeroOnNull(dataByBU[i]["Non-SME"])
          );
          categoryWiseData["Potential-SME"].push(
            zeroOnNull(dataByBU[i]["Potential-SME"])
          );
          categoryWiseData["SME"].push(zeroOnNull(dataByBU[i]["SME"]));
        }

        this.leadWiseDistributionDataSource.dataset = [];
        for (j in categoryWiseData) {
          var dataAsValueObject = [];
          for (k in categoryWiseData[j]) {
            dataAsValueObject.push({
              value: categoryWiseData[j][k]
            });
          }

          this.leadWiseDistributionDataSource.dataset.push({
            seriesname: j,
            renderas: "Area",
            data: dataAsValueObject
          });
        }

      });




    if (this.empRole == 'CEO' || this.empRole == 'BU' || this.empRole == "SRMGMT") {
      this.api.getDashboardDataForCeoSrmgmtBu("")
        .subscribe(response => {
          var graphdata = response[0].barChartData;

          // set BU value to All
          this.userSelectedBU = "All"

          // Send data to plotDashboardGraph method to plot the graph
          this.plotDashboardGraph(graphdata);

          // BU's list 
          this.buList = response[1].account;

          // Update Total Associates Count
          this.totalAssociatesResponseData = response[2].associates;
          this.updateAssociatesCount(this.totalAssociatesResponseData, this.userSelectedBU, "totalAssociates")

          // // Update Billable Count
          this.deliveryBillableResponseData = response[3].billableAssociates;
          this.updateAssociatesCount(this.deliveryBillableResponseData, this.userSelectedBU, "totalBillable")

          // // Update Non Billable Count
          this.nonBillalbleResponseData = response[4].NonbillableAssociates;
          this.updateAssociatesCount(this.nonBillalbleResponseData, this.userSelectedBU, "totalNonBillable")

          // Update In Transit Count
          this.inTransitResponseData = response[5].InTransitAssociates;
          this.updateAssociatesCount(this.inTransitResponseData, this.userSelectedBU, "totalInTransit")

          // Update EBR Count
          this.ebrResponseData = response[6].EBRAssociates;
          this.updateAssociatesCount(this.ebrResponseData, this.userSelectedBU, "totalEbr")

          // Update Pool Count
          this.poolResponseData = response[7].PoolAssociates;
          this.updateAssociatesCount(this.poolResponseData, this.userSelectedBU, "totalInPoll")


          // // Update OnShore Count
          this.onShoreResponseData = response[8].onshoreLocationWiseCount;
          this.updateOnShoreOffshoreCount(this.onShoreResponseData, this.userSelectedBU, 'totalOnshore')

          // Update OffShore Count
          this.offShoreResponeData = response[9].offshoreLocationWiseCount;
          this.updateOnShoreOffshoreCount(this.offShoreResponeData, this.userSelectedBU, 'totalOffshore')

          // // Update Visa Count
          this.visaResponseData = response[10].visa;
          this.updateVisaCount(this.visaResponseData, this.userSelectedBU)

          // Update OnShore locations Count
          this.updateOnShoreOffShoreUniqueLocationsCount(this.onShoreResponseData, this.userSelectedBU, "onShore")

          // Update OffShore locations Count
          this.updateOnShoreOffShoreUniqueLocationsCount(this.onShoreResponseData, this.userSelectedBU, "offShore")

        }, error => {
          console.log(error)
          // Dismiss the loader
          // this.dismissLoader();
          // Show alert with error message
          //  this.showAlert(Constants.ERROR_TITLE, Constants.ERROR_MESSAGE);
        })
    }


  }
  // Below method to plot the Graph
  plotDashboardGraph(graphdata: any) {
    // Code to plot the chart
    let dataByBU = [];

    for (let i in graphdata) {
      if (
        // Changes done by mbatchu as per new graph API
        dataByBU[graphdata[i][1]] === undefined ||
        dataByBU[graphdata[i][1]] === null
      ) {
        dataByBU[graphdata[i][1]] = [];
      }
      dataByBU[graphdata[i][1]][graphdata[i][0]] = graphdata[i][2];
    }
    this.dhDataSource.categories[0].category = [];
    var categoryWiseData = [];
    var categories = [
      "SME",
      "Potential-SME",
      "Non-SME",
      "Non-Rated"
    ];
    categoryWiseData["SME"] = [];
    categoryWiseData["Potential-SME"] = [];
    categoryWiseData["Non-SME"] = [];
    categoryWiseData["Non-Rated"] = [];

    function zeroOnNull(object) {
      if (object === undefined || object === null) {
        return "0";
      }
      return object;
    }
    for (let i in dataByBU) {
      this.dhDataSource.categories[0].category.push({
        label: i
      });

      categoryWiseData["Non-Rated"].push(
        zeroOnNull(dataByBU[i]["Non-Rated"])
      );
      categoryWiseData["Non-SME"].push(
        zeroOnNull(dataByBU[i]["Non-SME"])
      );
      categoryWiseData["Potential-SME"].push(
        zeroOnNull(dataByBU[i]["Potential-SME"])
      );
      categoryWiseData["SME"].push(zeroOnNull(dataByBU[i]["SME"]));
    }
    this.dhDataSource.dataset = [];
    for (let j in categoryWiseData) {
      var dataAsValueObject = [];
      for (let k in categoryWiseData[j]) {
        dataAsValueObject.push({
          value: categoryWiseData[j][k]
        });
      }

      this.dhDataSource.dataset.push({
        seriesname: j,
        renderas: "Area",
        data: dataAsValueObject
      });
    }
  }

  // Below method to update Total Associates tile count
  updateAssociatesCount(data: any, selectedBU: string, callName: string) {
    // Reset Values
    let valueCall: any;
    valueCall = callName;
    this[valueCall + 'Count'] = 0;

    if (selectedBU == "All") {
      // All means By default view or Org view
      if (this.empRole == "DH") {
        // DH Role
        const valueCall = data.filter(obj => obj.account_name === this.accountName)
        if (valueCall.length > 0) {
          this[valueCall + 'Count'] = valueCall[0].count;
        }
      } else {
        // Role CEO, SRMGMT & BU
        this[valueCall + 'Count'] = data.reduce(function (previousValue, obj) {
          return previousValue + obj.count;
        }, 0);
      }
    } else {
      // else block for select any BU from drop down
      if (this.empRole == "DH") {
        // Role DH
        this[valueCall + 'Count'] = data.reduce(function (previousValue, obj) {
          return previousValue + obj.count;
        }, 0);
      } else {
        // Role CEO, SRMGMT & BU
        this[valueCall + 'Count'] = data.reduce(function (previousValue, obj) {
          if (obj.account_name === selectedBU) {
            return previousValue + obj.count;
          }
          return previousValue;
        }, 0);
      }
    }
  }

  // Below method to update OnShore count
  updateOnShoreOffshoreCount(data: any, selectedBU: string, callName: string) {
    console.log("Selected BU -> ", selectedBU)

    // Reset Values
    let valueCall: any;
    valueCall = callName;
    this[valueCall + 'Count'] = 0;

    if (selectedBU == "All") {
      // All means By default view or Org view
      if (this.empRole == "DH") {
        // DH Role
        const valueCall = data.filter(obj => obj.account_name === this.accountName)
        if (valueCall.length > 0) {
          this[valueCall + 'Count'] = valueCall.reduce(function (previousValue, obj) {
            return previousValue + obj.count;
          }, 0);
        }
      } else {
        // Role CEO, SRMGMT & BU
        this[valueCall + 'Count'] = data.reduce(function (previousValue, obj) {
          return previousValue + obj.count;
        }, 0);
      }
    } else {
      // else block for select any BU from drop down
      if (this.empRole == "DH") {
        // Role DH
        this[valueCall + 'Count'] = data.reduce(function (previousValue, obj) {
          return previousValue + obj.count;
        }, 0);
      } else {
        // Role CEO, SRMGMT & BU
        this[valueCall + 'Count'] = data.reduce(function (previousValue, obj) {
          if (obj.account_name === selectedBU) {
            return previousValue + obj.count;
          }
          return previousValue;
        }, 0);
      }
    }
  }

  // Below method to update UnUsed Visa count
  updateVisaCount(data: any, selectedBU: string) {
    console.log("Selected BU -> ", selectedBU)

    // Reset Values
    this.totalVisaUnusedCount = 0;

    if (selectedBU == "All") {
      // All means By default view or Org view
      if (this.empRole == "DH") {
        // DH Role
        const VisaUnused = data.filter(obj => obj.account_name === this.accountName)
        if (VisaUnused.length > 0) {
          this.totalVisaUnusedCount = VisaUnused[0].count;
        }
      } else {
        // Role CEO, SRMGMT & BU
        if (this.empRole == "DH") {
          this.totalVisaUnusedCount = data.reduce(function (previousValue, obj) {
            return previousValue + obj.COUNT;
          }, 0);
        } else {
          this.totalVisaUnusedCount = data.reduce(function (previousValue, obj) {
            return previousValue + obj.count;
          }, 0);
        }
      }
    } else {
      // else block for select any BU from drop down
      if (this.empRole == "DH") {
        // Role DH
        this.totalVisaUnusedCount = data.reduce(function (previousValue, obj) {
          return previousValue + obj.COUNT;
        }, 0);
      } else {
        // Role CEO, SRMGMT & BU
        let EmpRole = this.empRole;
        this.totalVisaUnusedCount = data.reduce(function (previousValue, obj) {
          if (obj.account_name === selectedBU) {
            if (EmpRole == "DH") {
              return previousValue + obj.COUNT;
            } else {
              return previousValue + obj.count;
            }
          }
          return previousValue;
        }, 0);
      }
    }
  }

  // Below method to update OnShore Unique locations count
  updateOnShoreOffShoreUniqueLocationsCount(data: any, selectedBU: string, callName: string) {
    console.log("Selected BU -> ", selectedBU)
    // Reset Values
    let valueCall: any;
    valueCall = callName;
    this[valueCall + 'UniqueLocations'] = [];
    this[valueCall + 'Location1Count'] = 0;
    this[valueCall + 'Location2Count'] = 0;
    this[valueCall + 'Location3Count'] = 0;

    if (selectedBU == "All") {
      // All means By default view or Org view
      if (this.empRole == "DH") {
        // DH Role
        const allLocations = data.map(data => data.location)
        this[valueCall + 'UniqueLocations'] = allLocations.filter((x, i, a) => x && a.indexOf(x) === i)
        for (var i = 0; i < data.length; i++) {
          if (data[i].location === this[valueCall + 'UniqueLocations'][0]) {
            if (data[i].account_name === this.accountName) {
              this[valueCall + 'Location1Count'] = this[valueCall + 'Location1Count'] + data[i].count;
            }
          }
        }
        for (var i = 0; i < data.length; i++) {
          if (data[i].location === this[valueCall + 'UniqueLocations'][1]) {
            if (data[i].account_name === this.accountName) {
              this[valueCall + 'Location2Count'] = this[valueCall + 'Location2Count'] + data[i].count;
            }
          }
        }
        for (var i = 0; i < data.length; i++) {
          if (data[i].location === this[valueCall + 'UniqueLocations'][2]) {
            if (data[i].account_name === this.accountName) {
              this[valueCall + 'Location3Count'] = this[valueCall + 'Location3Count'] + data[i].count;
            }
          }
        }
      } else {
        // Role CEO, SRMGMT & BU
        const allLocations = data.map(data => data.location)
        this[valueCall + 'UniqueLocations'] = allLocations.filter((x, i, a) => x && a.indexOf(x) === i)
        for (var i = 0; i < data.length; i++) {
          if (data[i].location === this[valueCall + 'UniqueLocations'][0]) {
            this[valueCall + 'Location1Count'] = this[valueCall + 'Location1Count'] + data[i].count;
          }
        }
        for (var i = 0; i < data.length; i++) {
          if (data[i].location === this[valueCall + 'UniqueLocations'][1]) {
            this[valueCall + 'Location2Count'] = this[valueCall + 'Location2Count'] + data[i].count;
          }
        }
        for (var i = 0; i < data.length; i++) {
          if (data[i].location === this[valueCall + 'UniqueLocations'][2]) {
            this[valueCall + 'Location3Count'] = this[valueCall + 'Location3Count'] + data[i].count;
          }
        }
      }
    } else {
      // else block for select any BU from drop down
      if (this.empRole == "DH") {
        // Role DH
        const allLocations = data.map(data => data.location)
        this[valueCall + 'UniqueLocations'] = allLocations.filter((x, i, a) => x && a.indexOf(x) === i)
        for (var i = 0; i < data.length; i++) {
          if (data[i].location === this[valueCall + 'UniqueLocations'][0]) {
            this[valueCall + 'Location1Count'] = this[valueCall + 'Location1Count'] + data[i].count;
          }
        }
        for (var i = 0; i < data.length; i++) {
          if (data[i].location === this[valueCall + 'UniqueLocations'][1]) {
            this[valueCall + 'Location2Count'] = this[valueCall + 'Location2Count'] + data[i].count;
          }
        }
        for (var i = 0; i < data.length; i++) {
          if (data[i].location === this[valueCall + 'UniqueLocations'][2]) {
            this[valueCall + 'Location3Count'] = this[valueCall + 'Location3Count'] + data[i].count;
          }
        }
      } else {
        // Role CEO, SRMGMT & BU
        const allLocations = data.map(data => data.location)
        this[valueCall + 'UniqueLocations'] = allLocations.filter((x, i, a) => x && a.indexOf(x) === i)
        for (var i = 0; i < data.length; i++) {
          if (data[i].location === this[valueCall + 'UniqueLocations'][0]) {
            if (data[i].account_name === selectedBU) {
              this[valueCall + 'Location1Count'] = this[valueCall + 'Location1Count'] + data[i].count;
            }
          }
        }
        for (var i = 0; i < data.length; i++) {
          if (data[i].location === this[valueCall + 'UniqueLocations'][1]) {
            if (data[i].account_name === selectedBU) {
              this[valueCall + 'Location2Count'] = this[valueCall + 'Location2Count'] + data[i].count;
            }
          }
        }
        for (var i = 0; i < data.length; i++) {
          if (data[i].location === this[valueCall + 'UniqueLocations'][2]) {
            if (data[i].account_name === selectedBU) {
              this[valueCall + 'Location3Count'] = this[valueCall + 'Location3Count'] + data[i].count;
            }
          }
        }
      }
    }
  }

}
