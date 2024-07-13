import React from 'react'
import IndexRouter from './App_Routing/IndexRouter'
import { LoginSessionProvider } from './ContextAPI/LoginSessionContext'
import { Provider } from 'react-redux'
import store from './Store/index'

function App() {
    return (
        <>
            <Provider store={store}>
                <LoginSessionProvider>
                    <IndexRouter />
                </LoginSessionProvider>
            </Provider>

        </>)
}
export default App