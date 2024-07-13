import { call, takeLatest, put, CallEffect, PutEffect } from 'redux-saga/effects'
import { loginFailure, loginRequest, loginSuccess } from '../Store/authSlice'
import Api from '../API/api'

function* loginSaga(action: { payload: { username: string, password: string } }): Generator<CallEffect | PutEffect, void, any> {
    try {
        const response = yield call(Api.getInstance().post, 'users/login', action.payload)
        yield put(loginSuccess(response.data.token))
    } catch (error: any) {
        yield put(loginFailure(error.message))
    }

}

export default function* watchLogin() {
    yield takeLatest(loginRequest, loginSaga)
}