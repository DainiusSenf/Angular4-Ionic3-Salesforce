import { Component } from '@angular/core';
import {FilterService} from "../../services/filter.service";
import {LoadingController} from "ionic-angular";
import {FilterSettings, FilterValues} from "../../models/filterSettings";
import {animate, style, transition, trigger} from "@angular/core";

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.html',
  animations: [
    trigger
    (
      'mapAnim', [
        transition(':enter', [
          style({height:'0px', opacity: 0, minHeight:0}),
          animate('300ms ease-in-out', style( {  height:'*',opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('300ms ease-in-out', style({height:'0px', opacity: 0, minHeight:0}))
        ])
      ]
    )
  ]
})
export class FilterComponent {

  private showExpandedSearch: boolean;
  private showFiltersMobile: boolean;

  public filterSettings: FilterSettings;
  public filterValues: FilterValues;

  filter = {
    countries: [],
    types: [],
    statuses: [],
    beneficialOwners: [],
    portfolios: []
  };

  private loading;

  itemList = [];
  selectedItems = [];
  settings = {};


  constructor(private filterService : FilterService,
              public loadingCtrl: LoadingController) {

    this.showExpandedSearch = false;
    this.showFiltersMobile = false;
    this.filterValues = new FilterValues();
    this.getStatuses(JSON.stringify(this.filter));
  }

  ngOnInit() {

    this.itemList = [
      {"id":1,"itemName":"India","capital":"Delhi","image":"http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"},
      {"id":2,"itemName":"Singapore", "capital":"Singapore","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg"},
      {"id":3,"itemName":"United Kingdom", "capital":"London","image":"http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg"},
      {"id":4,"itemName":"Canada","capital":"Ottawa","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg"},
      {"id":5,"itemName":"South Korea","capital":"Seoul","image":"http://www.sciencekids.co.nz/images/pictures/flags96/South_Korea.jpg"},
      {"id":6,"itemName":"Brazil","capital":"Brasilia","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg"}
    ];

    this.selectedItems = [
      {"id":1,"itemName":"India"},
      {"id":2,"itemName":"Singapore"},
      {"id":3,"itemName":"United Kingdom"},
      {"id":4,"itemName":"Canada"}];
    this.settings = {
      text:"Select Countries",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      classes:"myclass custom-class",
      showCheckbox: true
    };

    this.filterSettings = new FilterSettings();
  }

  onItemSelect(item: any) {
    console.log(item);
    // console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    // console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
  onBlur() {
    this.filter.statuses = this.filterValues.selectedStatuses.map(function(a) {return a["itemName"];});
    this.filter.countries = this.filterValues.selectedCountries.map(function(a) {return a["itemName"];});
    this.filter.beneficialOwners = this.filterValues.selectedBeneficialOwners.map(function(a) {return a["itemName"];});
    this.filter.portfolios = this.filterValues.selectedPortfolios.map(function(a) {return a["itemName"];});
    this.filter.types = this.filterValues.selectedClaimTypes.map(function(a) {return a["itemName"];});
    this.getStatuses(JSON.stringify(this.filter));
  }

  onShowHideExtSearch() {
    this.showExpandedSearch = !this.showExpandedSearch;
  }

  onOpenMobileFilters(){
    this.showFiltersMobile = !this.showFiltersMobile;
  }

  getStatuses(filterString) {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
    this.filterService.getStatusValues(filterString).then(res => {
      console.log('getStatusValues res');
      if(res) {
        this.filterValues.countriesList = res[0].countries;
        this.filterValues.statusesList = res[0].statuses;
        this.filterValues.claimTypesList = res[0].types;
        this.filterValues.beneficialOwnersList= res[0].beneficialOwners;
        this.filterValues.portfolioList = res[0].portfolios;
      }
      this.loading.dismiss();
      console.log(res);
    });
  }
}
