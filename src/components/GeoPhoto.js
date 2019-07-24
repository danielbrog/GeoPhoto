import React from 'react'
import SubHeader from './SubHeader'
import LocationSearch from './LocationSearch'
import LocationList from './LocationList'
import LocationDashboard from './LocationDashboard'

const GeoPhoto = () => (
    <div className="geoPhoto">
        <SubHeader />
        <LocationSearch />
        <LocationList />
        <LocationDashboard />
    </div>
)

export default GeoPhoto