import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TotSearchResultComponent
} from '@web/app/components/tot-search-result/tot-search-result.component';

describe('SearchComponent', () => {
  let component: TotSearchResultComponent;
  let fixture: ComponentFixture<TotSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
