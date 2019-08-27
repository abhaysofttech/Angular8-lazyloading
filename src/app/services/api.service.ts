import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { ApiendpointService } from './apiendpoint.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
const headers = new HttpHeaders().set("Content-Type", "application/json");

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiURL: any;
  currentURL: any;
  //dataList = './assets/list.json';
  dataList = 'http://10.107.168.23:8082/ZenForteWebServices/api/charts/genderChart/20521/PGM';
  constructor(private httpPlugin: HttpClient, private apiendpoint: ApiendpointService) {
    this.apiURL = this.apiendpoint.API;
    this.currentURL = this.apiURL.baseURL
  }

  // getDashboardDataForPGM(data){
  //    return this._http.get(this.dataList).toPromise();
  // }

  // getDashboardDataForPGM2(data): Observable<any> {
  //   let dataState = this.httpPlugin.get(this.dataList, {});
  //   return forkJoin(dataState);
  // }
  // getDashboardDataForPGM1(data) {
  //   let dataState = this.httpPlugin.get(this.dataList).toPromise();
  //   return dataState;
  // }

  /**
     * Below method is used to get Dashboard data for PGM
     */
  getDashboardDataForPGM(authToken: string, empRole: string, empNumber: string): Observable<any> {

    // Set request time
    // this.httpPlugin.setRequestTimeout(this.apiRequestTimeOut);
    // this.httpPlugin.setDataSerializer('json');

    // Prepare headers
    // this.httpPlugin.setHeader('*', 'encryptedToken', "" + authToken);
    // this.httpPlugin.setHeader('*', 'Content-Type', "application/json");

    // Http post method for Graph
    let twentyFiveWindowResponse = this.httpPlugin.post(this.currentURL + this.apiURL.twentyFiveWindowService +
      empNumber + "&role=" + empRole, {}, {})

    // Http get method for dashboard data
    // let dashboardResponse = this.httpPlugin.get(this.url + this.dashboardCountsForCeoSrmgmtBuService,
    //   {}, {});

    // Http get method for gender chart

    let genderChartResponse = this.httpPlugin.get(this.currentURL + this.apiURL.getGenderChartForPGM + empNumber +
      "/" + empRole, {});

    // Http get method for bar chart
    let leadWiseResponse = this.httpPlugin.get(this.currentURL  + this.apiURL.pgmDistributionService + empNumber +
      "/" + empRole, {});
    // Http get method for overall associates chart
    let overAllAssociatesChartResponse = this.httpPlugin.get(this.currentURL + this.apiURL.overallAssociatesService +
      empNumber + "/" + empRole, {});

    // return forkJoin([twentyFiveWindowResponse, dashboardResponse, genderChartResponse,
    //   barChartResponse, overAllAssociatesChartResponse])
    return forkJoin([genderChartResponse,leadWiseResponse,overAllAssociatesChartResponse,twentyFiveWindowResponse]);

  }

  /**
   * Below method is used to get dashboard data for CEO, SRMGMT & BU 
   */
  getDashboardDataForCeoSrmgmtBu(authToken: string): Observable<any> {
    // Http get method for Graph
    let graphResponse = this.httpPlugin.get(this.currentURL + this.apiURL.dashboardGraphForCeoSrmgmtBuService, {});

    // Http get method for Account list
    let accountList = this.httpPlugin.get(this.currentURL + this.apiURL.getAccountList, {});

    // Http get method for Total Associates count
    let totalAssociatesCount = this.httpPlugin.get(this.currentURL + this.apiURL.getTotalAssociatesCount, {});

    // Http get method for Total Billable count
    let totalBillableAssociatesCount = this.httpPlugin.get(this.currentURL + this.apiURL.getBillableAssociatesCount, {});

    // Http get method for Non Billable count
    let totalNonBillableAssociatesCount = this.httpPlugin.get(this.currentURL + this.apiURL.getNonBillableAssociatesCount, {});

    // Http get method for InTransit count
    let totalInTransitCount = this.httpPlugin.get(this.currentURL + this.apiURL.getInTransitCount, {});

    // Http get method for Pool count
    let totalPoolCount = this.httpPlugin.get(this.currentURL + this.apiURL.getPoolCount, {});

    // Http get method for EBR count
    let totalEbrCount = this.httpPlugin.get(this.currentURL + this.apiURL.getEbrCount, {});

    // Http get method for OnShore location wise count
    let totalOnShoreLocationWiseCount = this.httpPlugin.get(this.currentURL + this.apiURL.getOnShoreLocationWiseCount, {});

    // Http get method for OffShore location wise count
    let totalOffShoreLocationWiseCount = this.httpPlugin.get(this.currentURL + this.apiURL.getOffShoreLocationWiserCount, {});

    // Http get method for Visa count
    let totalVisaCount = this.httpPlugin.get(this.currentURL + this.apiURL.getVisaCount, {});

    return forkJoin([graphResponse, accountList, totalAssociatesCount, totalBillableAssociatesCount,
      totalNonBillableAssociatesCount, totalInTransitCount, totalEbrCount, totalPoolCount, totalOnShoreLocationWiseCount,
      totalOffShoreLocationWiseCount, totalVisaCount])
  }


  login(userName: string, password: string): Observable<any> {

  //  return new Promise((resolve, reject) => {

      // Prepare body
      let body = {
        "strUsername": userName,
        "strPassword": password
      }

      // Prepare headers
      // let headers: {
      //   "Content-Type": "application/json"
      // }

      // Http post method 
      // this.httpPlugin.post(this.url + this.loginServiceWithEncryptedToken, body, headers)
      let loginData = this.httpPlugin.post(this.currentURL + this.apiURL.loginSerivce,body);
    //  this.httpPlugin.post(this.currentURL + this.apiURL.loginSerivce, body)
       return loginData;
   // });
  }


}
