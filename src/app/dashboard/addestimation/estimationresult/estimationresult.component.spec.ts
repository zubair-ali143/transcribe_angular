import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationresultComponent } from './estimationresult.component';

describe('EstimationresultComponent', () => {
  let component: EstimationresultComponent;
  let fixture: ComponentFixture<EstimationresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimationresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimationresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
