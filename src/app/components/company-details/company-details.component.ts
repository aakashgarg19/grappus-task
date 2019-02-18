import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BadgeData } from 'src/app/models/badgeData';
import { BadgeMaster } from 'src/app/models/badgeMaster';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit, OnChanges {
  @Input() public badgeMaster: Array<BadgeMaster>;
  @Input() public badgeData: Array<BadgeData>;

  public badgeDataCopy: Array<BadgeData>;
  private selectedFilter: string;
  public selectedPage = 1;
  public pages = [1, 2 , 3, 4];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.badgeData) {
      this.badgeDataCopy = JSON.parse(JSON.stringify(this.badgeData));
      if (this.selectedFilter) {
        this.filterData();
      }
    }
  }

  public filterData() {
    this.badgeDataCopy = this.badgeData.filter((badge) => {
      return badge.badgeText.toLowerCase() === this.selectedFilter.toLowerCase();
    });
  }

  public filterBadgeData(badge) {
    this.selectedFilter = badge;
    this.filterData();
  }

 public changePage(page) {
   this.selectedPage = page;
    this.badgeDataCopy = JSON.parse(JSON.stringify(this.badgeData));
    this.badgeDataCopy = this.shuffle(this.badgeDataCopy);
    this.selectedFilter = undefined;
  }

  public shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
