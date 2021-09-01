import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotHeaderComponent } from '@web/app/components/tot-header/tot-header.component';

describe('HeaderComponent', () => {
  let component: TotHeaderComponent;
  let fixture: ComponentFixture<TotHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
