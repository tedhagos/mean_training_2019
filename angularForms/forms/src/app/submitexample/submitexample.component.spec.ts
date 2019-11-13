import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitexampleComponent } from './submitexample.component';

describe('SubmitexampleComponent', () => {
  let component: SubmitexampleComponent;
  let fixture: ComponentFixture<SubmitexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
