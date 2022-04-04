import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-beast',
  templateUrl: './pokemon-beast.component.html',
  styleUrls: ['./pokemon-beast.component.scss'],
})
export class PokemonBeastComponent implements OnInit {
  @Input() beast: any;
  constructor() {}

  ngOnInit(): void {}
}
