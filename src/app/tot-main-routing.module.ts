import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  TotSearchResultsComponent
} from '@web/app/navigation-components/tot-search-results/tot-search-results.component';

import {
  TotResultItemPageComponent
} from './navigation-components/tot-result-item-page/tot-result-item-page.component';

const routes: Routes = [
  {
    path: '',
    component: TotSearchResultsComponent,
  },
  {
    path: 'home',
    component: TotSearchResultsComponent,
  },
  {
    path: 'item-screen',
    component: TotResultItemPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TotMainRoutingModule { }
