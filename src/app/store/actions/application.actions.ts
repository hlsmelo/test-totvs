import { createAction } from '@ngrx/store';

export const SearchChange = createAction('[Search Component] Change', (payload: string) => ({ payload }));
export const SearchItemsFill = createAction('[SearchItems Component] Fill', (payload: Object[]) => ({ payload }));
