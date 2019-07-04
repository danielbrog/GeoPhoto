import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from '../src/routers/AppRouter'
/* will be added once reducers/actions have been set up
import {Provider} from 'react-redux'

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
*/
//renders root class
ReactDOM.render(<AppRouter />, document.getElementById('app'))