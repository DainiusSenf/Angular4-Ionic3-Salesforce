import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {FancyGridComponent} from '../pages/fancy-grid/fancy-grid.component';

import {ChartModule} from 'angular2-highcharts';
import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
import * as highchartsMore from 'highcharts/js/highcharts-more';
import * as brokenAxis from 'highcharts/js/modules/broken-axis';
import * as highmaps from 'highcharts/js/modules/map';
import {SalesforceService} from "../services/salesforce.service";
import {ClaimService} from "../services/claim.service";
import {CountryTableComponent} from "../pages/country-table/country-table.component";
import {StatusTableComponent} from "../pages/status-table/status-table.component";
import {ProfileComponent} from "../pages/profile/profile.component";
import {SalesforceResolver} from "../services/salesforceResolver.service";

export function highchartsFactory() {
  // Initialize addons.
  highchartsMore(highcharts);
  brokenAxis(highcharts);
  highmaps(highcharts);
  return highcharts;
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FancyGridComponent,
    CountryTableComponent,
    StatusTableComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FancyGridComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SalesforceService,
    ClaimService,
    SalesforceResolver,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    {
      provide: APP_INITIALIZER,
      useFactory:
        (config: SalesforceResolver) => () => config.resolve(),
        deps: [SalesforceResolver],
        multi: true
    },
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {
  constructor(private sfdc: SalesforceService) {
    this.sfdc.controller = 'CTRL_WTaxCommunityApp';
  }
}
