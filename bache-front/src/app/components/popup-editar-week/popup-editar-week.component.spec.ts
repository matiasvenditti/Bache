import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditarWeekComponent } from './popup-editar-week.component';

describe('PopupEditarWeekComponent', () => {
  let component: PopupEditarWeekComponent;
  let fixture: ComponentFixture<PopupEditarWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupEditarWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEditarWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
