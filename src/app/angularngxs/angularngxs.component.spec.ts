import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularngxsComponent } from './angularngxs.component';

describe('AngularngxsComponent', () => {
  let component: AngularngxsComponent;
  let fixture: ComponentFixture<AngularngxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularngxsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularngxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
