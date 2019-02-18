import { Component, Input, OnInit } from '@angular/core';
import { SectorsData } from 'src/app/models/sectorsData';

@Component({
  selector: 'app-sector-details',
  templateUrl: './sector-details.component.html',
  styleUrls: ['./sector-details.component.css']
})
export class SectorDetailsComponent implements OnInit {

  @Input() public sectorMaster: Array<string>;
  @Input() public sectorData: Array<SectorsData>;
  constructor() { }

  ngOnInit() {
  }

}
