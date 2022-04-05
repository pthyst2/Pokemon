import { Component, OnInit } from '@angular/core';
import { BeastService } from 'src/app/services/data/beast.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading = true;
  videos: any = [];
  pokemons: any = [];
  limits = 10;
  constructor(private beastService: BeastService) {}

  ngOnInit(): void {
    this.setupVideos();
    this.loadPokemons();
  }
  setupVideos() {
    this.videos = [
      {
        source: 'https://www.youtube.com/watch?v=D0zYJ1RQ-fs',
      },
      {
        source: 'https://www.youtube.com/watch?v=1roy4o4tqQM',
      },
      {
        source: 'https://www.youtube.com/watch?v=bILE5BEyhdo',
      },
      {
        source: 'https://www.youtube.com/watch?v=uBYORdr_TY8',
      },
    ];
  }
  loadPokemons() {
    let data = {
      limit: 10,
      offset: 0,
    };
    this.beastService.getList(data).subscribe(
      (res: any) => {
        this.loading = false;
        this.pokemons = res.results;
      },
      (err) => {
        this.loading = false;
        console.error('Error when getting beast list: ', err.error.message);
      }
    );
  }
}
