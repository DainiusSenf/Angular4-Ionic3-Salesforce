import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {FancyGridComponent} from "../pages/fancy-grid/fancy-grid.component";
import {SalesforceService} from "../services/salesforce.service";
import {SalesforceResolver} from "../services/salesforceResolver.service";

declare let jsforce: any;


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private authenticate: SalesforceResolver,
              private salesforceService: SalesforceService) {
    let sf = (<any>window)._sf;

    // this.authenticate.resolve().subscribe(data => {
    //   this.rootPage = HomePage;
    //   console.log(data);
    //   this.initializeApp();
    //   }
    // );

    // if (this.salesforceService.conn) {
    //   this.rootPage = HomePage;
    // } else if (sf.api) {
    //   this.salesforceService.conn = new jsforce.Connection({
    //     sessionId: sf.api,
    //     serverUrl: `${window.location.protocol}//${window.location.hostname}`
    //   });
    //   this.rootPage = HomePage;
    // } else if (sf.auth) {
    //   this.salesforceService.authenticate(sf.auth.login_url, sf.auth.username, sf.auth.password, sf.auth.oauth2)
    //     .then((res) => {
    //       console.log('res');
    //       console.log(res);
    //       this.rootPage = HomePage;
    //       this.initializeApp();
    //
    //     }, (reason) => {
    //
    //     });
    // }

          this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'FancyGrid', component: FancyGridComponent }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
