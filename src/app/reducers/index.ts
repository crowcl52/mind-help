import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
// REducers
import * as fromUI from './ui.reducer';


export interface AppState {
  ui: fromUI.State
}

export const reducers: ActionReducerMap<AppState> = {
  ui : fromUI.uiReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
