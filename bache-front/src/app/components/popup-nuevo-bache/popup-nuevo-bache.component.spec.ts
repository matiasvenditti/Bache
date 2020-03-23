import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNuevoBacheComponent } from './popup-nuevo-bache.component';

describe('PopupNuevoBacheComponent', () => {
  let component: PopupNuevoBacheComponent;
  let fixture: ComponentFixture<PopupNuevoBacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupNuevoBacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNuevoBacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
