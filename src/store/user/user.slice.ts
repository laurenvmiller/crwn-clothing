import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserData } from '../../utils/firebase/firebase.utils';

export interface UserSliceModel {
    currentUser: UserData | undefined;
    isLoading: boolean;
    error: Error | undefined;
}

const initialState: UserSliceModel = {
    currentUser: undefined,
    isLoading: false,
    error: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUserAction(state: UserSliceModel, action: PayloadAction<UserData| undefined>) {
        state.currentUser = action.payload
    },
    checkUserSessionAction(state: UserSliceModel, action: PayloadAction<UserData| undefined>) {
        state.currentUser = action.payload
    },
    googleSigninStartAction(state: UserSliceModel, action: PayloadAction<UserData| undefined>) {
        state.currentUser = action.payload
    },
    emailSigninStartAction(state: UserSliceModel, action: PayloadAction<UserData| undefined>) {
        state.currentUser = action.payload
    },
    signinSuccessAction(state: UserSliceModel, action: PayloadAction<UserData| undefined>) {
        state.currentUser = action.payload
    },
    signinFailedAction(state: UserSliceModel, action: PayloadAction<UserData| undefined>) {
        state.currentUser = action.payload
    },
    signupStartAction(state: UserSliceModel, action: PayloadAction<UserData| undefined>) {
        state.currentUser = action.payload
    },
    signupSuccessAction(state: UserSliceModel, action: PayloadAction<UserData| undefined>) {
        state.currentUser = action.payload
    },
    signupFailedAction(state: UserSliceModel, action: PayloadAction<UserData| undefined>) {
        state.currentUser = action.payload
    },
    signOutStartAction(state: UserSliceModel, action: PayloadAction<UserData| undefined>) {
        state.currentUser = action.payload
    },
    signOutSuccessAction(state: UserSliceModel, action: PayloadAction<UserData| undefined>) {
        state.currentUser = action.payload
    },
    signOutFailedAction(state: UserSliceModel, action: PayloadAction<UserData| undefined>) {
        state.currentUser = action.payload
    },
  }
})

export const { setCurrentUserAction } = userSlice.actions

export default userSlice.reducer