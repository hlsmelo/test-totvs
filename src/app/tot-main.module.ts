import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { applicationReducer } from '@web/app/store/reducers/application.reducer';

import { TotMainRoutingModule } from '@web/app/tot-main-routing.module';
import { TotMainComponent } from '@web/app/tot-main.component';
import { TotHeaderModule } from '@web/app/components/tot-header/tot-header.module';
import { TotSearchResultsModule } from '@web/app/navigation-components/tot-search-results/tot-search-results.module';

@NgModule({
  declarations: [
    TotMainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ application: applicationReducer }),
    TotMainRoutingModule,
    TotHeaderModule,
    TotSearchResultsModule,
  ],
  providers: [],
  bootstrap: [TotMainComponent]
})
export class TotMainModule { }
