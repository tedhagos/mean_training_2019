import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssclassesComponent } from './cssclasses.component';

describe('CssclassesComponent', () => {
  let component: CssclassesComponent;
  let fixture: ComponentFixture<CssclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
