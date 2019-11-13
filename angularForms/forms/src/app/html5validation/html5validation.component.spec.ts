import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5validationComponent } from './html5validation.component';

describe('Html5validationComponent', () => {
  let component: Html5validationComponent;
  let fixture: ComponentFixture<Html5validationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html5validationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5validationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
