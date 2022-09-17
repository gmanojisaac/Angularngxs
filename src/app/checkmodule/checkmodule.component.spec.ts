import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckmoduleComponent } from './checkmodule.component';

describe('CheckmoduleComponent', () => {
  let component: CheckmoduleComponent;
  let fixture: ComponentFixture<CheckmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
