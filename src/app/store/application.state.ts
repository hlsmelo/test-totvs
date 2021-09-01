export interface IApplicationState {
    searchText: string,
    searchItems: Object[],
};

export interface IRootApplicationState {
    application: IApplicationState,
};
  
export const applicationState: IApplicationState = {
    searchText: '',
    searchItems: [],
};
