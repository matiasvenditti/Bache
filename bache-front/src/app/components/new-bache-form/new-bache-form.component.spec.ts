import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBacheFormComponent } from './new-bache-form.component';

describe('NewBacheFormComponent', () => {
  let component: NewBacheFormComponent;
  let fixture: ComponentFixture<NewBacheFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBacheFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBacheFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
