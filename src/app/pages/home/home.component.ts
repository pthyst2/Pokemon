import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading = true;
  videos: any = [];
  pokemons: any = [
    {
      name: 'Pong Kyubi 00',
      image:
        'https://media.relife.vn/resize/960x576/files/content/2021/12/10/vo-huynh-ngoc-phung-pong-kyubi-sexy-nong-bong-1-10110043.jpg',
    },
    {
      name: 'Pong Kyubi 01',
      image: 'https://pbs.twimg.com/media/E_36VAAVgAg5d2B.jpg',
    },
    {
      name: 'Pong Kyubi 02',
      image:
        'https://media.relife.vn/files/content/2021/12/10/anh-nong-vo-huynh-ngoc-phung-pong-kyubi-noi-y-17-min-10182229.jpg',
    },
    {
      name: 'Pong Kyubi 03',
      image:
        'https://cobesinsu.com/wp-content/uploads/2021/12/Pong-Kyubi-Onlyfan-nong-bong-voi-loat-anh-sexy-18.jpeg',
    },
    {
      name: 'Pong Kyubi 04',
      image: 'https://i.redd.it/zjf53vewl9s71.jpg',
    },
    {
      name: 'Pong Kyubi 05',
      image: 'https://pbs.twimg.com/media/FFmYCitaUAEGYOb.jpg',
    },
    {
      name: 'Pong Kyubi 06',
      image: 'https://i.redd.it/qvmyhydvm5f71.jpg',
    },
    {
      name: 'Pong Kyubi 07',
      image:
        'https://64.media.tumblr.com/9a7fb52c35611b80ee688b9dc970e28e/784f5bd8d63da20b-3f/s400x600/026425aabe27d487768468029a02fe12f2541791.jpg',
    },
    {
      name: 'Pong Kyubi 08',
      image:
        'https://cdn3.nude-pics.org/pong-kyubi-vietnamese-celebrity-dJoIYXB3ZC/pong-kyubi-vietnamese-celebrity.webp',
    },
    {
      name: 'Pong Kyubi 09',
      image:
        'https://cdn6.redxxx.cc/picture/original/nUE0pUZ6Yl9cYaWyMTDhnKDiZ3Z5MUqho_Z-MTf3ZF5dpTpcXltbHzIxJSuLYzAwXI8mpmyxq_5iLmuxnmpkYzcjMj3p9W/(RedXXX.cc)_pong-pong-preview.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.getVideos();
    this.getPokeBeats();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  getVideos() {
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

  getPokeBeats() {}
}
