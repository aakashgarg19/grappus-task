import { Component, Input, OnInit } from '@angular/core';
import { SectorsData } from 'src/app/models/sectorsData';

@Component({
  selector: 'app-sector-info',
  templateUrl: './sector-info.component.html',
  styleUrls: ['./sector-info.component.css']
})
export class SectorInfoComponent implements OnInit {

  @Input() public sectorData: Array<SectorsData>;
  constructor() { }

  ngOnInit() {
  }

}
