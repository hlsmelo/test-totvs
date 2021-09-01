import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TotHeaderComponent } from '@web/app/components/tot-header/tot-header.component';
import { TotSearchComponent } from '@web/app/components/tot-search/tot-search.component';

@NgModule({
  declarations: [
    TotHeaderComponent,
    TotSearchComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    TotHeaderComponent,
  ],
})
export class TotHeaderModule { }
