import { Component } from '@angular/core';
import {SalesforceService} from "../../services/salesforce.service";

@Component({
  selector: 'logout',
  templateUrl: 'logout.html'
})
export class LogoutComponent {

  text: string;

  constructor(salesforceService : SalesforceService) {
    let sf = (<any>window)._sf;
    console.log('salesforceService.conn ');
    console.log( salesforceService.conn);
    console.log( salesforceService.conn.instanceUrl);
    salesforceService.conn.instanceUrl = 'https://cs89.salesforce.com';
    // console.log('cHANGED');

    // console.log( salesforceService.conn.instanceUrl);
    //
    //
    // // salesforceService.endSession();
    // salesforceService.conn = null;
    // (<any>window)._sf = null;
    // console.log('salesforceService.conn ');
    //
    // console.log( salesforceService.conn);
    // console.log('(<any>window)._sf ');
    //
    // console.log( (<any>window)._sf);
    salesforceService.endSession();

  }

}
