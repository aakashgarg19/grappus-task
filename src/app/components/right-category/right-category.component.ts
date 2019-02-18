import { Component, Input, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';

@Component({
  selector: 'app-right-category',
  templateUrl: './right-category.component.html',
  styleUrls: ['./right-category.component.css']
})
export class RightCategoryComponent implements OnInit {

  @Input() public category: Categories;
  constructor() { }

  ngOnInit() {

  }
}
