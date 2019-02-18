import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-tabs',
  templateUrl: './container-tabs.component.html',
  styleUrls: ['./container-tabs.component.css']
})
export class ContainerTabsComponent implements OnInit {
  public tabs = [];
  public selectedTab = 'Company';
  constructor() { }

  ngOnInit() {
    this.tabs = [
      'Company',
      'Investor',
      'Person',
      'Sector',
      'Industry',
      'Sub - Industry',
      'Region'
    ];
  }

  public updateSelectedTab(tab) {
    this.selectedTab = tab;
  }

}
