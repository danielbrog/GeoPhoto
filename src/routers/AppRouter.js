import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import GeoPhoto from '../components/GeoPhoto'
import AddLocation from '../components/AddLocation'
import Header from '../components/Header'

const AppRouter = () => (

        <BrowserRouter>
        <div>
        <Header />
            <Switch>
                <Route exact={true} path="/GeoPhoto" component={GeoPhoto}/>
                <Route path="/GeoPhoto/addLocation" component={AddLocation}/>
            </Switch>
            </div>
        </BrowserRouter>

)

export default AppRouter