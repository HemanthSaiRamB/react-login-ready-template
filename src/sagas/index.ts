import { all } from "redux-saga/effects";
import watchLogin from "./authSaga";

function* rootSaga() {
    yield all([watchLogin()])
}

export default rootSaga