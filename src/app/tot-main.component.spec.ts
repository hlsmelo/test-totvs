import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TotMainComponent } from '@web/app/tot-main.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TotMainComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TotMainComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'totvs'`, () => {
    const fixture = TestBed.createComponent(TotMainComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('totvs');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TotMainComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('totvs app is running!');
  });
});
