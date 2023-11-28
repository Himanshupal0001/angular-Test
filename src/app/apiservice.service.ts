import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private dataSubject = new BehaviorSubject<any[]>([])
  // public data = this.dataSubject.asObservable();
  constructor(private http: HttpClient) { }
  private characterSubjet = new BehaviorSubject<any[]>([]);
  character$ = this.characterSubjet.asObservable();
  protected url = 'https://swapi.dev/api/people'
  getData(): Observable<ApiResult> {
    return this.http.get<ApiResult>(this.url);
  }

  updateSubject(data: any[]): void {
    this.characterSubjet.next(data)
  }

  getPerson(index: string): Observable<any> {
    return this.http.get<ApiResult>(`${this.url}/${index}`)
  }

  addCharacter(character: any): void {
    const currChar = this.characterSubjet.value;
    this.characterSubjet.next([...currChar, character]);
  }

}

export interface ApiResult {
  count: number,
  next: string,
  previous: null,
  results: []
}

// export interface Character {
//   name: string,
//   birth_year: string,
//   gender: string,
//   height: string,
//   eye_color: string,
//   mass: string
// }
