import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsCheckComponent } from './ngxs-check.component';

describe('NgxsCheckComponent', () => {
  let component: NgxsCheckComponent;
  let fixture: ComponentFixture<NgxsCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxsCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxsCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
