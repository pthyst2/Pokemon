import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class BeastService {
  route = environment.apiUrl + 'pokemon/';
  constructor(private http: HttpClient) {}
  getList(data?: any): Observable<any> {
    if (data) {
      return this.http.get(
        this.route + '?limit=' + data.limit + '&offset=' + data.offset
      );
    } else {
      return this.http.get(this.route);
    }
  }
  getById(id: any): Observable<any> {
    return this.http.get(this.route + id);
  }
  getByName(name: string): Observable<any> {
    return this.http.get(this.route + name);
  }
  search(data: any): Observable<any> {
    return this.http.post(this.route + 'search/', data);
  }
}
