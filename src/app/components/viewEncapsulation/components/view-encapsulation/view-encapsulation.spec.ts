import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulation } from './view-encapsulation';

describe('ViewEncapsulation', () => {
  let component: ViewEncapsulation;
  let fixture: ComponentFixture<ViewEncapsulation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEncapsulation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEncapsulation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
