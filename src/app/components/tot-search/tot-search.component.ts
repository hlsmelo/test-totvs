import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { IFoundItem } from '@web/app/types/globals';
import { TotSearchResultsService } from '@web/app/navigation-components/tot-search-results/tot-search-results.service';
import { SearchChange, SearchItemsFill } from '@web/app/store/actions/application.actions';
import { IApplicationState } from '@web/app/store/application.state';
import { Router } from '@angular/router';

@Component({
  selector: 'tot-search',
  templateUrl: './tot-search.component.html',
  styleUrls: ['./tot-search.component.scss']
})
export class TotSearchComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('searchField', {static: true}) searchField?: ElementRef<HTMLInputElement>; 
  @ViewChild('wrapper', {static: true}) wrapper?: ElementRef<HTMLDivElement>; 
  
  public searchText: string = '';
  public previewItems: IFoundItem[] = [];
  public faSearch: IconDefinition = faSearch;
  
  protected subscriptions: Subscription[] = [];
  
  constructor(
    protected store: Store,
    protected router: Router,
    protected searchResults: TotSearchResultsService,
    ) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    const element: HTMLInputElement = (<ElementRef<HTMLInputElement>>this.searchField).nativeElement;

    this.subscriptions.push(
      this.store.select((state: any) => state.application)
        .subscribe((state: IApplicationState) => this.searchText = state.searchText ),

      fromEvent(element, 'keyup')
        .pipe(
          debounceTime(300),
          distinctUntilChanged(),          
        )
        .subscribe( ($event: Event) => this.preview((<HTMLInputElement>$event.target).value) ),
      
      fromEvent(window, 'mouseup')
        .subscribe( ($event: Event) => this.clearPreview(<MouseEvent>$event) ),
    );
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach( (subscription: Subscription) => subscription.unsubscribe() );
  }

  protected clearPreview($event: MouseEvent, force: boolean = false) {
    if (
      ! force &&
      (
        ! this.haveItems() ||
        (<any>$event).path.includes( (<ElementRef>this.wrapper).nativeElement)
      )
    ) {
      return;
    }

    this.previewItems = [];
  }
  
  protected preview(find: string) {
    if (find === '') {
      this.previewItems = [];

      return;
    }

    
    this.subscriptions.push(
      this.searchResults.getResults(find)
        .subscribe( (items) => this.previewItems = <IFoundItem[]>items ),
      );    
  }
  
  public search($event: MouseEvent, searchField: HTMLInputElement) {
    $event.preventDefault();

    this.subscriptions.push(
      this.searchResults.getResults(searchField.value)
        .subscribe( (items) => {
          this.store.dispatch( SearchItemsFill(<IFoundItem[]>items) );
          this.store.dispatch( SearchChange(searchField.value) );
        }),
    );

    this.clearPreview($event, true);    
    this.router.navigate(['/']);
  }
  
  public haveItems() {
    return this.previewItems.length > 0;
  }
}
