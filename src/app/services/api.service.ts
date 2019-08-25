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
    // let twentyFiveWindowResponse = this.httpPlugin.post(this.url + this.twentyFiveWindowService +
    //   empNumber + "&role=" + empRole, {}, {})

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
    return forkJoin([genderChartResponse,leadWiseResponse,overAllAssociatesChartResponse]);

  }


}
