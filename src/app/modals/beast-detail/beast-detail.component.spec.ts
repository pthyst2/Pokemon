import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeastDetailComponent } from './beast-detail.component';

describe('BeastDetailComponent', () => {
  let component: BeastDetailComponent;
  let fixture: ComponentFixture<BeastDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeastDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeastDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
