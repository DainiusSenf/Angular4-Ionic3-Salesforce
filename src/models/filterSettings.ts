export class FilterSettings {
  public settingsCountries = {};
  public settingsClaimTypes = {};
  public settingsStatuses = {};
  public settingsBeneficialOwners = {};
  public settingsPortfolios = {};

  constructor(){
    this.settingsCountries = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3
    };

    this.settingsClaimTypes = {
      singleSelection: false,
      text: "Select Claim Type",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3
    };

    this.settingsStatuses = {
      singleSelection: false,
      text: "Select Statuses",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3
    };


    this.settingsBeneficialOwners = {
      singleSelection: false,
      text: "Select Beneficial Owners",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3
    };

    this.settingsPortfolios = {
      singleSelection: false,
      text: "Select Portfolios",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3
    };
  }
}

export class FilterValues {
  public countriesList = [];
  public statusesList = [];
  public claimTypesList = [];
  public beneficialOwnersList = [];
  public portfolioList = [];

  public selectedCountries = [];
  public selectedClaimTypes = [];
  public selectedStatuses = [];
  public selectedBeneficialOwners = [];
  public selectedPortfolios = [];

  constructor(){}
}
