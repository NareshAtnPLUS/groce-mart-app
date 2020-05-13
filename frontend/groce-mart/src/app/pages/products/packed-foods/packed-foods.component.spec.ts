import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackedFoodsComponent } from './packed-foods.component';

describe('PackedFoodsComponent', () => {
  let component: PackedFoodsComponent;
  let fixture: ComponentFixture<PackedFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackedFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackedFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
