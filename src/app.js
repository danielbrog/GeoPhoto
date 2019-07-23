import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from '../src/routers/AppRouter'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'


const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

//renders root class
ReactDOM.render(jsx, document.getElementById('app'))