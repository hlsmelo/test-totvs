import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TotResultItemPageComponent
} from '@web/app/navigation-components/tot-result-item-page/tot-result-item-page.component';

describe('SearchComponent', () => {
  let component: TotResultItemPageComponent;
  let fixture: ComponentFixture<TotResultItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotResultItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotResultItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
