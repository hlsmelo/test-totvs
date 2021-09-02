import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@web/environments/environment';
import { selfApi } from 'api/self-api';
import { Observable, BehaviorSubject, from } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class TotSearchResultsService {
    public results$: BehaviorSubject<any> = new BehaviorSubject([]);

    constructor(
        protected http: HttpClient,
    ) { }

    public getResults(find: string): Observable<Object> {
        if (environment.apiUrl === '') {
            return from([
                selfApi.fetchItems({
                    db: 'frutas',
                    field: 'title_like',
                    find,
                }),
            ]);
        }

        const endpoint: string = environment.apiUrl + find;

        return this.http.get(endpoint);
    }
}
