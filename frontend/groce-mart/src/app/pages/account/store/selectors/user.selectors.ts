import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<fromUser.AppState>(
  fromUser.userFeatureKey
);
export const selectUser = createSelector(
  selectUserState,
  (state:fromUser.AppState)=> state.user
)
export const selectLoading = createSelector(
  selectUserState,
  (state:fromUser.AppState)=>state.loading
)
export const selectLoaded = createSelector(
  selectUserState,
  (state:fromUser.AppState)=> state.loaded
)
export const selectLogMessage = createSelector(
  selectUserState,
  (state:fromUser.AppState)=>state.logMessage
)
export const selectError = createSelector(
  selectUserState,
  (state:fromUser.AppState)=> state.error
)

export const selectJWTToken = createSelector(
  selectUserState,
  (state:fromUser.AppState)=>state.jwtToken
)
export const selectUserAvailable = createSelector(
  selectUserState,
  (state:fromUser.AppState)=>state.userAvailable
)
export const selectAvailableUser = createSelector(
  selectUserState,
  (state:fromUser.AppState)=>state.availableUser
)
export const selectIsOtpMatch = createSelector(
  selectUserState,
  (state:fromUser.AppState)=>state.isOtpMatch
)
