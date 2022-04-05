import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/data/game.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  games: any = [];
  generations: any = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.loadVersions();
    this.loadGenerations();
  }

  loadVersions() {
    this.gameService.versions().subscribe(
      (res: any) => {
        this.games = res.results;
      },
      (err) => {
        console.error('Error when getting versions list: ', err.error.message);
      }
    );
  }
  loadGenerations() {
    this.gameService.generations().subscribe(
      (res: any) => {
        this.generations = res.results;
      },
      (err) => {
        console.error(
          'Error when getting generations list: ',
          err.error.message
        );
      }
    );
  }
}
