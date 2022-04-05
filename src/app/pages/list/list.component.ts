import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BeastService } from 'src/app/services/data/beast.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  loading = true;
  keyword: string = '';
  limit: any = 20;
  offset: number = 0;
  page: number = 1;

  pokemons: any = [];

  constructor(
    private aroute: ActivatedRoute,
    private router: Router,
    private beastService: BeastService
  ) {}

  ngOnInit(): void {
    this.getParams();
    this.loadPokemons();
  }

  getParams() {
    let paramMap = this.aroute.snapshot.paramMap;
    if (paramMap) {
      let paramLimit: any = paramMap.get('limit');
      let paramPage: any = paramMap.get('page');
      if (
        paramLimit != 10 &&
        paramLimit != 20 &&
        paramLimit != 50 &&
        paramLimit != 100
      ) {
        this.limit = 20;
      } else {
        this.limit = paramLimit;
      }
      this.page = paramPage && paramPage > 0 ? paramPage : 1;
    }
  }

  loadPokemons() {
    let data = {
      limit: this.limit,
      offset: (this.page - 1) * this.limit,
    };
    this.beastService.getList(data).subscribe(
      (res: any) => {
        this.loading = false;
        this.pokemons = res.results;
      },
      (err) => {
        this.loading = false;
        console.error('Error when loading list pokemons: ', err.error.message);
      }
    );
  }
  goPage(page: number) {
    this.router.navigateByUrl('/list/?page=' + page + '&limit=' + this.limit);
  }
}
