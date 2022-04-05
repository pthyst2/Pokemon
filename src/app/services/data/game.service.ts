import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  route = environment.apiUrl;
  constructor(private http: HttpClient) {}
  versions(): Observable<any> {
    return this.http.get(this.route + 'version/');
  }
  generations(): Observable<any> {
    return this.http.get(this.route + 'generation/');
  }
}
