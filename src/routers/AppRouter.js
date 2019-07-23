import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import GeoPhoto from '../components/GeoPhoto'
import AddLocation from '../components/AddLocation'
import Header from '../components/Header'

const AppRouter = () => (

        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/" component={GeoPhoto}/>
                <Route exact path="/addLocation" component={AddLocation}/>
            </Switch>
        </BrowserRouter>

)

export default AppRouter