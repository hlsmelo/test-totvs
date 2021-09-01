import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotResultsModalComponent } from './tot-results-modal.component';

describe('TotResultsModalComponent', () => {
  let component: TotResultsModalComponent;
  let fixture: ComponentFixture<TotResultsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotResultsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotResultsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
