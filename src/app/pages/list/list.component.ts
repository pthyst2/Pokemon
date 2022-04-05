import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BeastService } from 'src/app/services/data/beast.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  loading = true;
  keyword: string = '';
  keywordChanged: Subject<string> = new Subject<string>();
  limit: any = 20;
  offset: number = 0;
  page: number = 1;
  pokemons: any = [];
  pages: number[] = [1];

  constructor(
    private aroute: ActivatedRoute,
    private router: Router,
    private beastService: BeastService
  ) {
    this.keywordChanged
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        if (value == '') {
          this.loadPokemons();
        } else {
          this.loading = true;
          this.beastService.getByName(value.toLowerCase()).subscribe(
            (res: any) => {
              this.loading = false;
              this.pokemons = [
                {
                  name: value,
                  url: 'https://pokeapi.co/api/v2/pokemon/' + res.id + '/',
                },
              ];
            },
            (err) => {
              this.loading = false;
              this.pokemons = [];
              console.error(
                'Error when searching pokemon name ' + value + ': ',
                err.error.message
              );
            }
          );
        }
      });
  }

  ngOnInit(): void {
    this.getParams();
    this.loadPokemons();
  }
  ngOnDestroy() {}
  getParams() {
    let paramMap = this.aroute.snapshot.paramMap;

    if (paramMap) {
      let paramLimit: any = paramMap.get('limit');
      let paramPage: any = paramMap.get('page');
      if (
        (paramLimit != 10 &&
          paramLimit != 20 &&
          paramLimit != 50 &&
          paramLimit != 100) ||
        !paramLimit
      ) {
        this.limit = 20;
      } else {
        this.limit = paramLimit;
      }
      this.page = paramPage && paramPage > 0 ? paramPage : 1;
    }
  }
  loadPokemons() {
    this.loading = true;
    let data = {
      limit: this.limit,
      offset: (this.page - 1) * this.limit,
    };
    this.beastService.getList(data).subscribe(
      (res: any) => {
        this.loading = false;
        this.pokemons = res.results;
        this.generatePages(res.count);
      },
      (err) => {
        this.loading = false;
        console.error('Error when loading list pokemons: ', err.error.message);
      }
    );
  }
  generatePages(count: number) {
    let totalPages: number =
      count % this.limit > 0 ? count / this.limit + 1 : count / this.limit;
    let i = 1;
    this.pages = [];
    while (i <= totalPages) {
      this.pages.push(i);
      i++;
    }
  }
  goPage(page: number) {
    window.location.assign('/list/' + page + '/' + this.limit);
  }
  changed(text: string) {
    this.keywordChanged.next(text);
  }
}
