import { Injectable } from '@angular/core';
import { SalesforceService} from "./salesforce.service";

@Injectable()
export class ClaimService {

  constructor(private sfdc: SalesforceService) {}

  public getUserClaims(userId): Promise<any> {
    return this.sfdc.execute('getUserClaims', {userId: userId})
      .then((res) => {
        return res;
      }, (err) => {
      });
  }

  public getUserClaimsChart(userId): Promise<any> {
    return this.sfdc.execute('getUserClaimsChart', {userId: userId})
      .then((res) => {
        return res;
      }, (err) => {
      });
  }

  public getUserClaimLinesTable(userId): Promise<any> {
    return this.sfdc.execute('getUserClaimLines', {userId: userId})
      .then((res) => {
        return res;
      }, (err) => {
      });
  }
}
