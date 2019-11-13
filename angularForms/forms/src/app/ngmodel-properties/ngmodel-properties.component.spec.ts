import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelPropertiesComponent } from './ngmodel-properties.component';

describe('NgmodelPropertiesComponent', () => {
  let component: NgmodelPropertiesComponent;
  let fixture: ComponentFixture<NgmodelPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmodelPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmodelPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
