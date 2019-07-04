import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import GeoPhoto from '../components/GeoPhoto'

const AppRouter = () => (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={GeoPhoto}/>
            </Switch>
        </BrowserRouter>

)

export default AppRouter