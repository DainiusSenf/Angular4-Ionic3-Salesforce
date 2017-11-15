import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs/Rx';
import {SalesforceService} from './salesforce.service';
// let jsforce = require('jsforce');
declare let jsforce: any;

@Injectable()
export class SalesforceResolver {

  constructor(private salesforceService: SalesforceService) {}

  resolve(): Observable<SalesforceService> {
    let sf = (<any>window)._sf;
    console.log('sf');
    console.log(sf);
    console.log((<any>window)._sf);
    return Observable.create((observer: Observer<SalesforceService>) => {
      console.log('observable');
      if (this.salesforceService.conn) {
        observer.next(this.salesforceService);
        observer.complete();
      } else if (sf.api) {
        this.salesforceService.conn = new jsforce.Connection({
          sessionId: sf.api,
          serverUrl: `${window.location.protocol}//${window.location.hostname}`
        });
        observer.next(this.salesforceService);
        observer.complete();
      } else if (sf.auth) {
        this.salesforceService.authenticate(sf.auth.login_url, sf.auth.username, sf.auth.password, sf.auth.oauth2)
          .then((res) => {
            observer.next(this.salesforceService);
            observer.complete();
          }, (reason) => {
            observer.error(reason);
            observer.complete();
          });
      }
    });
  }

  // public load() {
  //   return new Promise((resolve, reject) => {
  //     this.http.get('env.json').map( res => res.json() ).catch((error: any):any => {
  //       console.log('Configuration file "env.json" could not be read');
  //       resolve(true);
  //       return Observable.throw(error.json().error || 'Server error');
  //     }).subscribe( (envResponse) => {
  //       this.env = envResponse;
  //       let request:any = null;
  //
  //       switch (envResponse.env) {
  //         case 'production': {
  //           request = this.http.get('config.' + envResponse.env + '.json');
  //         } break;
  //
  //         case 'development': {
  //           request = this.http.get('config.' + envResponse.env + '.json');
  //         } break;
  //
  //         case 'default': {
  //           console.error('Environment file is not set or invalid');
  //           resolve(true);
  //         } break;
  //       }
  //
  //       if (request) {
  //         request
  //           .map( res => res.json() )
  //           .catch((error: any) => {
  //             console.error('Error reading ' + envResponse.env + ' configuration file');
  //             resolve(error);
  //             return Observable.throw(error.json().error || 'Server error');
  //           })
  //           .subscribe((responseData) => {
  //             this.config = responseData;
  //             resolve(true);
  //           });
  //       } else {
  //         console.error('Env config file "env.json" is not valid');
  //         resolve(true);
  //       }
  //     });
  //
  //   });
  // }
}
