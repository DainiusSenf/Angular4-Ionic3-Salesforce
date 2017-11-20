import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FilterComponent} from "../../components/filter/filter";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(FilterComponent) filterComp: FilterComponent;

  constructor(public navCtrl: NavController) {

  }

  openMobileFiltersHome(){
    this.filterComp.onOpenMobileFilters();
  }

}
