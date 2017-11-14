import { Component, NgZone, OnInit, OnDestroy, AfterViewInit, Input} from '@angular/core';

import { SalesforceService, SOQL } from '../../services/salesforce.service';
import { ClaimService } from '../../services/claim.service';

import { NavController } from 'ionic-angular';

declare let FancyGrid: any;

@Component({
  selector: 'app-fancy-grid',
  templateUrl: 'fancy-grid.component.html'
})
export class FancyGridComponent implements OnInit, OnDestroy, AfterViewInit {


  private pieChartConfig =  {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Browser market shares January, 2015 to May, 2015'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'IE',
        y: 56.33
      }, {
        name: 'Chrome',
        y: 24.03,
        sliced: true,
        selected: true
      }, {
        name: 'Firefox',
        y: 10.38
      }, {
        name: 'Safari',
        y: 4.77
      }, {
        name: 'Opera',
        y: 0.91
      }, {
        name: 'Other',
        y: 0.2
      }]
    }]
  };

  private data = [{
    name: 'Ted',
    surname: 'Smith',
    position: 'Java Developer',
    email: 'ted.smith@gmail.com',
    company: 'Electrical Systems',
    age: 30,
    education: 'High School Of Cambridge',
    knownledge: 'Java, Ruby'
  }, {
    name: 'Ed',
    surname: 'Johnson',
    position: 'C/C++ Market Data Developer',
    email: 'ed.johnson@gmail.com',
    company: 'Energy and Oil',
    age: 35,
    education: 'High School Of Cambridge',
    knownledge: 'C++'
  }, {
    name: 'Sam',
    surname: 'Williams',
    position: 'Technical Analyst',
    email: 'sam.williams@gmail.com',
    company: 'Airbus',
    age: 38,
    education: 'High School Of Cambridge',
    knownledge: ''
  }];

  private config = {
    title: 'Claims',
    renderTo: 'claimsTable',
    width: '900',
    height: '600',
    selModel: 'row',
    trackOver: true,
    summary: true,
    data: {
      fields: ['claimNumber', 'beneficialOwner', 'portfolioCode', 'country', 'claimed', 'refunded', 'paid'],
      items: this.data
    },
    defaults: {
      type: 'number',
      width: 100,
      summary: 'sum'
    },
    tbar: [{
      type: 'search',
      width: 350,
      emptyText: 'Search',
      paramsMenu: true,
      paramsText: 'Parameters'
    }],
    paging: {
      pageSize: 20,
      pageSizeData: [5, 10, 20, 50]
    },
    columns: [{
      index: 'claimNumber',
      type: 'string',
      title: 'Claim Number',
      summary: function(){
        return '';
      },
    },
      {
        index: 'beneficialOwner',
        title: 'Beneficial Owner',
        flex: 1,
        type: 'string',
        summary: function(){
          return '';
        }
      }, {
        index: 'portfolioCode',
        title: 'Portfolio Code',
        type: 'string',
        summary: function(){
          return '';
        }
      }, {
        index: 'country',
        title: 'Country',
        summary: function(){
          return '<div style="font-weight: bold;">Total</div>';
        }
      }, {
        index: 'claimed',
        title: 'Claimed',
        format: 'number'
      } , {
        index: 'refunded',
        title: 'Refunded',
        format: 'number'
      } , {
        index: 'paid',
        title: 'Paid',
        format: 'number'
      }]
  };
  public myGrid;

  constructor(private zone: NgZone, private sfdc: SalesforceService,  private claimService: ClaimService, public navCtrl: NavController) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.myGrid = new FancyGrid(this.config);
    });
  }

  ngOnDestroy() {
    FancyGrid.get(this.myGrid['renderTo']).destroy();
  }


}


