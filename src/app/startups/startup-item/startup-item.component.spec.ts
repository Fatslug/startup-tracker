import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupItemComponent } from './startup-item.component';

describe('StartupItemComponent', () => {
  let component: StartupItemComponent;
  let fixture: ComponentFixture<StartupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
