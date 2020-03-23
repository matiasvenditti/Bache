import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnaDerComponent } from './columna-der.component';

describe('ColumnaDerComponent', () => {
  let component: ColumnaDerComponent;
  let fixture: ComponentFixture<ColumnaDerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnaDerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnaDerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
