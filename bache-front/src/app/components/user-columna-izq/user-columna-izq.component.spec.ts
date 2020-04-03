import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserColumnaIzqComponent } from './user-columna-izq.component';

describe('UserColumnaIzqComponent', () => {
  let component: UserColumnaIzqComponent;
  let fixture: ComponentFixture<UserColumnaIzqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserColumnaIzqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserColumnaIzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
