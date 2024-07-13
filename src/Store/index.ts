import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type RootStore = ReturnType<typeof store.getState> // to know shape of store
export type AppDispatch = typeof store.dispatch // action objects type
export default store
