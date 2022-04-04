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
  getList(): Observable<any> {
    return this.http.get(this.route);
  }
  getById(id: any): Observable<any> {
    return this.http.get(this.route + id);
  }
  search(data: any): Observable<any> {
    return this.http.post(this.route + 'search/', data);
  }
}
