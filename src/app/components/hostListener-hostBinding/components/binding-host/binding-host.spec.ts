import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingHost } from './binding-host';

describe('BindingHost', () => {
  let component: BindingHost;
  let fixture: ComponentFixture<BindingHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingHost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingHost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
