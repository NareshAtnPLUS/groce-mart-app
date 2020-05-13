import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshMartComponent } from './fresh-mart.component';

describe('FreshMartComponent', () => {
  let component: FreshMartComponent;
  let fixture: ComponentFixture<FreshMartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshMartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshMartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
