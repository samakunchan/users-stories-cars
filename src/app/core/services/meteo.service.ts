import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MeteoService {
  constructor(private http: HttpClient) {}

  loadMeteo(): Observable<any> {
    return this.http.get('http://api.weatherapi.com/v1/current.json?key=6f069061751d4e5b8fe91438200505&q=Paris').pipe(
      // tslint:disable-next-line:no-string-literal
      map((data) => data['current']),
      shareReplay(),
    );
  }
}
