import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
    TotSearchResultsComponent
} from '@web/app/navigation-components/tot-search-results/tot-search-results.component';

import {
    TotSearchResultComponent
} from '@web/app/components/tot-search-result/tot-search-result.component';

import { TotResultsModalComponent } from '@web/app/components/tot-results-modal/tot-results-modal.component';

@NgModule({
    declarations: [
        TotSearchResultsComponent,
        TotSearchResultComponent,
        TotResultsModalComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
    ],
    exports: [
        TotSearchResultsComponent,
    ],
})
export class TotSearchResultsModule { }
