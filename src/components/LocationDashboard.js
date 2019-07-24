import React from 'react'
import {connect} from 'react-redux';
import {addManyLocations} from '../actions/locations'

export class LocationDashboard extends React.Component{
    constructor (props){
        super(props)
    }
    componentDidMount() {
        fetch('/api/locations')
        .then(res => res.json())
        .then(
            (result => {
                this.props.addManyLocations({locations: result})
            })
        )
    }

    render() {
        return (
            <div>
            DASHBOARD
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        locations: state.locations
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addManyLocations: (locations) => dispatch(addManyLocations(locations))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDashboard)