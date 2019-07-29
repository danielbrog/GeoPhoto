import React from 'react'

const LocationItem = (props) => {
    //const url = file && URL.createObjectURL(file)
    const imgsrc = '/api/' + props._id + '/image'
    return(
    <div className="LocationItem">
    <img className= "LocationItem__image"src= {imgsrc}/>
        {/*props.id*/}
        <div className="LocationItem__title">{props.title}</div>
        <div className="LocationItem__tags">{props.tags}</div>
        <div className="LocationItem__desc">{props.description}</div>
        <div className="LocationItem__visited">{props.visited}</div>
        
        <div className="LocationItem__lat">{props.latitude}</div>
        <div className="LocationItem__long">{props.longitude}</div>
    </div>
)}

export default LocationItem