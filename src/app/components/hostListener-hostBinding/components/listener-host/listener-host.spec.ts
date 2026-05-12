import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerHost } from './listener-host';

describe('ListenerHost', () => {
  let component: ListenerHost;
  let fixture: ComponentFixture<ListenerHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListenerHost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListenerHost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
