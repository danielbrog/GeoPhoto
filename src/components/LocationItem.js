import React from 'react'

const LocationItem = (props) => (
    <div>
        {/*props.id*/}
        {props.title}
        {props.tags}
        {props.description}
        {props.visited}
        {props.imageName}
        {props.latitude}
        {props.longitude}
    </div>
)

export default LocationItem