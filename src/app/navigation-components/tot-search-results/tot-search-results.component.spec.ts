import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TotSearchResultsComponent
} from '@web/app/navigation-components/tot-search-results/tot-search-results.component';

describe('SearchComponent', () => {
  let component: TotSearchResultsComponent;
  let fixture: ComponentFixture<TotSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
