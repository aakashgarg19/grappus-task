import { Component, OnInit } from '@angular/core';

import { BadgeData } from './models/badgeData';
import { BadgeMaster } from './models/badgeMaster';
import { Categories } from './models/categories';
import { SectorsData } from './models/sectorsData';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'grappus-task';
  public categoriesData: Array<Categories> = [];
  public badgeMasterData: Array<BadgeMaster> = [];
  public badgeData: Array<BadgeData> = [];
  public sectorsMasterData: Array<string> = [];
  public sectorsData: Array<any> = [];
  constructor(
    private _dataService: DataService
    ) {}
  ngOnInit() {
    this.getCategoriesData();
    this.getCompanyData();
    this.getSectorsData();
  }

  private getCategoriesData() {
    this._dataService.getCategories().subscribe((response: Array<Categories>) => {
      this.categoriesData = response;
    });
  }

  private getCompanyData() {
    this._dataService.getBadgeMasterData().subscribe((response: Array<BadgeMaster>) => {
      this.badgeMasterData = response;
    });
    this._dataService.getBadgeData().subscribe((response: Array<BadgeData>) => {
      this.badgeData = response;
    });
  }

  private getSectorsData() {
    this._dataService.getSectorsMasterData().subscribe((response: Array<string>) => {
      this.sectorsMasterData = response;
    });
    this._dataService.getSectorsData().subscribe((response: Array<SectorsData>) => {
      this.sectorsData = response;
    });
  }
}
