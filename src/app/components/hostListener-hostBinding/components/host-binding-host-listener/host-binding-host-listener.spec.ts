import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostBindingHostListener } from './host-binding-host-listener';

describe('HostBindingHostListener', () => {
  let component: HostBindingHostListener;
  let fixture: ComponentFixture<HostBindingHostListener>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostBindingHostListener]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostBindingHostListener);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
