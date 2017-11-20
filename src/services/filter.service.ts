import {Injectable} from '@angular/core';
import {SalesforceService} from "./salesforce.service";

@Injectable()
export class FilterService {

  constructor(private sfdc: SalesforceService) { }

  public getStatusValues(filter): Promise<any> {
    return this.sfdc.execute('CTRL_Filtering', 'getPicklistsValues', {filter: filter})
      .then((res) => {
        return res;
      }, (err) => {
      });
  }
}
