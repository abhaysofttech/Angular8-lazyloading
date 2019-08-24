import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

const leadWideDistributionChartdata = {
  "chart": {
    "caption": "LEAD WISE DISTRIBUTION",
    "subcaption": "",
    "showvalues": "1",
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
    "theme": "fusion"
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
    caption: "Gender Wise Break Up",
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



const data = {
  chart: {
    caption: "Market Share of Web Servers",
    plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "Apache",
      value: "32647479"
    },
    {
      label: "Microsoft",
      value: "22100932"
    },
    {
      label: "Zeus",
      value: "14376"
    },
    {
      label: "Other",
      value: "18674221"
    }
  ]
};
@Component({
  selector: 'app-allreport',
  templateUrl: './allreport.component.html',
  styleUrls: ['./allreport.component.scss']
})
export class AllreportComponent implements OnInit {

  genderChartWidth = 600;
  genderChartWHeight = 400;
  genderChartType = 'pie2d';
  genderChartWDataFormat = 'json';
  genderChartWDataSource = genderBreakUpChartdata;
  leadWiseDistributionDataSource = leadWideDistributionChartdata;


  leadWiseDistributionChartType = 'stackedcolumn2d';

  // overAllAssociatesDataSource = overAllAssociatesChartdata;
  // leadWiseDistributionDataSource = leadWideDistributionChartdata;

  width = 600;
  height = 400;
  type = "pie2d";
  dataFormat = "json";
  dataSource = data;

  constructor(private api: ApiService) { }

  ngOnInit() {

    //overAllAssociatesDataSource

    // this.api.getDashboardDataForPGM1("text Data test")
    // .then((data: any) => { console.log(data) });

    this.api.getDashboardDataForPGM("", "PGM", "20521")
      .subscribe(response => {
        // let genderData = JSON.parse(response[0].genderChartData);
        let genderData = response[0];
        let leadwiseDistributionData = response[1];
        console.log(response)
        // Plot Gender graph
        this.genderChartWDataSource.data = [];
        for (let i = 0; i < genderData.genderChartData.length; i++) {
          this.genderChartWDataSource.data.push({
            label: genderData.genderChartData[i][0],
            value: genderData.genderChartData[i][1]
          })
        }


        // Plot Leadwise Distribution graph
        this.leadWiseDistributionDataSource.dataset = [];
        var graphdata = leadwiseDistributionData.barChartData;

        var dataByBU = [];
        var totalCount: number = 0;
        var i;
        var j;
        var k;
        for (i in graphdata) {
          if (
            dataByBU[graphdata[i][2]] === undefined ||
            dataByBU[graphdata[i][2]] === null
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
  }

}
