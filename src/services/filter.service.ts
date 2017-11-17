import {Injectable} from '@angular/core';
import {SalesforceService} from "./salesforce.service";

@Injectable()
export class FilterService {

  constructor(private sfdc: SalesforceService) { }

  public getStatusValues(filter): Promise<any> {
    return this.sfdc.execute('getPicklistsValues', {filter: filter})
      .then((res) => {
        return res;
      }, (err) => {
      });
  }
}
