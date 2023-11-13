import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  protected url = 'https://swapi.dev/api/people'
  getData(): Observable<ApiResult> {
    return this.http.get<ApiResult>(this.url);
  }

  getPerson(index: string): Observable<any> {
    return this.http.get<ApiResult>(`${this.url}/${index}`)
  }
}

export interface ApiResult {
  count: number,
  next: string,
  previous: null,
  results: []
}

