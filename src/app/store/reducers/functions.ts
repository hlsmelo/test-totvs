import { IApplicationState } from "../application.state";

export function upinsert(state: IApplicationState, payload: Object[]): IApplicationState {
    return {
      ...state,
      searchItems: payload,
    };
  }
  
export function changeSearchText(state: IApplicationState, payload: string): IApplicationState {
    return {
        ...state,
        searchText: payload,
    };
}