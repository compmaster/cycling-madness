import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCyclistComponent } from './edit-cyclist.component';

describe('EditCyclistComponent', () => {
  let component: EditCyclistComponent;
  let fixture: ComponentFixture<EditCyclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCyclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCyclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
