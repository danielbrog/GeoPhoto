import React from 'react'
import {connect} from 'react-redux'
import LocationItem from './LocationItem'

const LocationList = (props) => (
    <div>
        {
            props.locations.length === 0 ? (
                <p className="locationList_noLocation">No Locations.</p>
            ) : (
            props.locations.map(location => (
                <LocationItem
                    key = {location._id}
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

export default connect(mapStateToProps)(LocationList)