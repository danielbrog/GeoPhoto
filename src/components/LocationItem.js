import React from 'react'

const LocationItem = (props) => {
    //const url = file && URL.createObjectURL(file)
    const imgsrc = '/api/' + props._id + '/image'
    return(
    <div>
    <img src= {imgsrc}/>
        {/*props.id*/}
        {props.title}
        {props.tags}
        {props.description}
        {props.visited}
        
        {props.latitude}
        {props.longitude}
    </div>
)}

export default LocationItem