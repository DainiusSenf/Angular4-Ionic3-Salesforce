import { Component } from '@angular/core';
import {FilterService} from "../../services/filter.service";

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.html'
})
export class FilterComponent {

  itemList = [];
  countriesList = [];
  selectedCountries = [];
  selectedItems = [];
  statusesList = [];
  selectedStatuses = [];
  settings = {};

  filter = {
    countries: [],
    types: [],
    statuses: []
  };

  constructor(private filterService : FilterService) {
    this.getStatuses(JSON.stringify(this.filter));
  }

  ngOnInit() {

    // this.countriesList = [
    //   {"id": 1,"itemName":  "LTU"} ,
    //   {"id": 2,"itemName":  "PAR"} ,
    //   {"id": 3,"itemName":  "USA"} ,
    //   {"id": 4,"itemName":  "UK"} ,
    //   {"id": 5,"itemName":  "FR"} ,
    //   {"id": 6,"itemName":  "SPAIN"}
    // ];
    //
    // this.statusesList = [
    //   {"id": 1,"itemName":  "In Progress"} ,
    //   {"id": 2,"itemName":  "New"} ,
    //   {"id": 3,"itemName":  "Old"}
    // ];

    this.itemList = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea" },
      { "id": 6, "itemName": "Brazil" }
    ];

    this.selectedItems = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" }];

    this.settings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
  onBlur(items: any) {
    this.filter.statuses = this.selectedStatuses.map(function(a) {return a["itemName"];});
    this.filter.countries = this.selectedCountries.map(function(a) {return a["itemName"];});
    this.getStatuses(JSON.stringify(this.filter));
  }

  getStatuses(filterString) {
    this.filterService.getStatusValues(filterString).then(res => {
      console.log('getStatusValues res');
      if(res) {
        this.countriesList = res[0].countries;
        this.statusesList = res[0].statuses;
      }
      console.log(res);
    });
  }
}
