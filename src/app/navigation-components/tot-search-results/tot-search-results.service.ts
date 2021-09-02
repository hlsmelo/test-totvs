import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@web/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotSearchResultsService {
  public results$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(
    protected http: HttpClient,
  ) { }

  public getResults(find: string): Observable<Object> {
    const endpoint: string = environment.apiUrl + find;

    return this.http.get(endpoint);
  }
}
