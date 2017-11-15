import {Injectable} from '@angular/core';
import {SalesforceService} from "./salesforce.service";

@Injectable()
export class ClaimService {

  constructor(private sfdc: SalesforceService) {}

  public getUserClaims(): Promise<any> {
    return this.sfdc.execute('getUserClaims', {})
      .then((res) => {
        return res;
      }, (err) => {
      });
  }

  public getUserClaimsChart(): Promise<any> {
    return this.sfdc.execute('getUserClaimsChart', {})
      .then((res) => {
        return res;
      }, (err) => {
      });
  }

  public getUserClaimLinesTable(): Promise<any> {
    return this.sfdc.execute('getUserClaimLines', {})
      .then((res) => {
        return res;
      }, (err) => {
      });
  }

  public getUserClaimsByCountry(): Promise<any> {
    return this.sfdc.execute('getUserClaimsByCountry', {})
      .then((res) => {
        return res;
      }, (err) => {
      });
  }

  public getClaimsByStatus(): Promise<any> {
    return this.sfdc.execute('getClaimsByStatus', {})
      .then((res) => {
        return res;
      }, (err) => {
      });
  }

  public getUserInformation(): Promise<any> {
    return this.sfdc.execute('getUserInformation', {})
      .then((res) => {
        return res;
      }, (err) => {
      });
  }
}
