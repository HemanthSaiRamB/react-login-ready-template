import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILoginInfo } from "../Utilities/Interfaces";
import { TLogingCredentials } from "../Utilities/Types";


const initialState: ILoginInfo = {
    token: null,
    error: null,
    loading: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest(state, action: PayloadAction<TLogingCredentials>) {
            state.error = null
            state.loading = true
        },
        loginSuccess(state, action: PayloadAction<string>) {
            state.loading = false
            state.token = action.payload
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const { loginRequest, loginSuccess, loginFailure } = authSlice.actions
export default authSlice.reducer