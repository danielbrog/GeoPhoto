import React from 'react'
import {connect} from 'react-redux'
import LocationItem from './LocationItem'

const LocationDashBoard = (props) => (
    <div>{console.log(props.locations)}
        {
            props.locations.length === 0 ? (
                <p className="locationDashboard_noLocation">No Locations.</p>
            ) : (
            props.locations.map(location => (
                <LocationItem
                    key = {location.id}
                    {...location}
                />
                )))
    }
    </div>
)

const mapStateToProps = (state) => {
    return {
        locations: state.locations
    }
}

export default connect(mapStateToProps)(LocationDashBoard)