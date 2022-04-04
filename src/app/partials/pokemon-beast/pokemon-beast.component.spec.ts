import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBeastComponent } from './pokemon-beast.component';

describe('PokemonBeastComponent', () => {
  let component: PokemonBeastComponent;
  let fixture: ComponentFixture<PokemonBeastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonBeastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonBeastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
