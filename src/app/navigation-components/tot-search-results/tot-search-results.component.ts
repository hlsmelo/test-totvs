import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { TotSearchResultsService } from '@web/app/navigation-components/tot-search-results/tot-search-results.service';
import { IApplicationState, IRootApplicationState } from '@web/app/store/application.state';
import { IFoundItem } from '@web/app/types/globals';

@Component({
    selector: 'tot-search-results',
    templateUrl: './tot-search-results.component.html',
    styleUrls: ['./tot-search-results.component.scss']
})
export class TotSearchResultsComponent implements OnInit, OnDestroy, AfterViewInit {
    public subscriptions: Subscription[] = [];
    public foundedItems: IFoundItem[] = [];
    public canShowModal: boolean = false;
    public modalDestinationUrl: string = '';

    constructor(
        protected searchResults: TotSearchResultsService,
        protected store: Store,
    ) { }

    ngOnInit(): void {
    }
    
    ngOnDestroy(): void {
        this.subscriptions.forEach( (subscription:Subscription): void => subscription.unsubscribe() );
    }

    ngAfterViewInit(): void {
        this.subscriptions.push(
            this.store.select( (state: any) => state.application )
                .subscribe(
                    (state: IApplicationState) => this.foundedItems = <IFoundItem[]>state.searchItems,
                ),
        );
    }

    public showModal($event: any): void {
        this.canShowModal = $event;
    }

    public haveItems(): boolean {
        return this.foundedItems.length > 0
    }
}
