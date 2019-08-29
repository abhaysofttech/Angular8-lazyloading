import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { ApiService } from 'src/app/services/api.service';
import { commonService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    // password: ''
    password: '$Zen2017'
  }
  userData = {
    username: '',
    role: '',
    staffNo: '',
    roles:[]
  }

  ZenForteData: any = [];
  constructor(private api: ApiService, private router: Router, private _data: commonService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    // form.reset();
    // this.router.navigate(['/user/dashboard/details']);
    this.api.login(this.loginData.username, this.loginData.password)
      .subscribe(response => {
        debugger
        console.log(response);
        this.userData.username = response.sessionBean.authenticationVO.staffName;
        this.userData.role = response.sessionBean.authenticationVO.role;
        this.userData.staffNo = response.sessionBean.authenticationVO.staffNo;
        this.userData.roles = response.roles;
        this._data.updateMessage(this.userData); // Shared Data in shared service
        debugger;
        this.ZenForteData.push(response)
        localStorage.setItem("ZenForteData", JSON.stringify(this.ZenForteData));
        this.router.navigate(['/user/dashboard/details']);
        // this._data.currentData.subscribe(currentData => console.log(currentData))

      })

    //  let tempdata = [];
    //  isNullOrUndefined(localStorage.getItem("ZenForteData")) ? tempdata = [] : tempdata = JSON.parse(localStorage.getItem("ZenForteData"));
    //  localStorage.setItem("ZenForteData", JSON.stringify(this.loginData));

    //  if(tempdata.length<1){

    //   // this.ZenForteData = (tempdata).concat(this.loginData);
    //   // localStorage.setItem("ZenForteData", JSON.stringify(this.loginData));
    //  }
    //  else{
    //    console.log('array size exceeded...');
    //  }

  }

}
