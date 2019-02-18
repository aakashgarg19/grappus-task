import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCategoryComponent } from './right-category.component';

describe('RightCategoryComponent', () => {
  let component: RightCategoryComponent;
  let fixture: ComponentFixture<RightCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
