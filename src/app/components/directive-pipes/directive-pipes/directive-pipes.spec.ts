import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePipes } from './directive-pipes';

describe('DirectivePipes', () => {
  let component: DirectivePipes;
  let fixture: ComponentFixture<DirectivePipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivePipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivePipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
