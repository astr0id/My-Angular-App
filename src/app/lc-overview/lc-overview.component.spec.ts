import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcOverviewComponent } from './lc-overview.component';

describe('LcOverviewComponent', () => {
  let component: LcOverviewComponent;
  let fixture: ComponentFixture<LcOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
