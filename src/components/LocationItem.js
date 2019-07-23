import React from 'react'

const LocationItem = (props) => (
    <div>
        {/*props.id*/}
        {props.title}
        {props.tags}
        {props.description}
        {props.visited}
        {props.imageName}
    </div>
)

export default LocationItem