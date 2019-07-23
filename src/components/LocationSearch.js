import React from 'react'
import {NavLink} from 'react-router-dom'

const LocationSearch = () => (
    <div>
        <form>
            <p className="description">Search for photos by location</p>
            <input className= "searchBar"></input>
            <button className="searchSubmit">Search</button>
        </form>
        <NavLink to="/addLocation">Add Location</NavLink>
    </div>
)

export default LocationSearch