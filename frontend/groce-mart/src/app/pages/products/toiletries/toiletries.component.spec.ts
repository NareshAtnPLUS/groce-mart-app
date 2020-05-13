import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletriesComponent } from './toiletries.component';

describe('ToiletriesComponent', () => {
  let component: ToiletriesComponent;
  let fixture: ComponentFixture<ToiletriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToiletriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToiletriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
