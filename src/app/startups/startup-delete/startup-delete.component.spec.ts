import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupDeleteComponent } from './startup-delete.component';

describe('StartupDeleteComponent', () => {
  let component: StartupDeleteComponent;
  let fixture: ComponentFixture<StartupDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
