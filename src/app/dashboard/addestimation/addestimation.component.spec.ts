import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddestimationComponent } from './addestimation.component';

describe('AddestimationComponent', () => {
  let component: AddestimationComponent;
  let fixture: ComponentFixture<AddestimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddestimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddestimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
