import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotSearchComponent } from '@web/app/components/tot-search/tot-search.component';

describe('SearchComponent', () => {
  let component: TotSearchComponent;
  let fixture: ComponentFixture<TotSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
