import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FancyGridComponent } from '../pages/fancy-grid/fancy-grid.component';

import {ChartModule} from 'angular2-highcharts';
import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
import * as highchartsMore from 'highcharts/js/highcharts-more';
import * as brokenAxis from 'highcharts/js/modules/broken-axis';
import * as highmaps from 'highcharts/js/modules/map';
import {SalesforceService} from "../services/salesforce.service";
import {ClaimService} from "../services/claim.service";

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
    FancyGridComponent
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
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {}
