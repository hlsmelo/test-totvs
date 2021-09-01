import { Action } from "@ngrx/store";

import {
  IApplicationState,
  applicationState,
} from "@web/app/store/application.state";

import * as applicationActions from "@web/app/store/actions/application.actions";
import { changeSearchText, upinsert } from "@web/app/store/reducers/functions";

export function applicationReducer(
  state: IApplicationState = applicationState,
  action: Action
): IApplicationState {
  // console.log([state, action]);
  switch (action.type) {
    case applicationActions.SearchItemsFill.type:
      return upinsert(state, (<any>action).payload);
    case applicationActions.SearchChange.type:
      return changeSearchText(state, (<any>action).payload);
    default:
      return state;
  }
}