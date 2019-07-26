import React from 'react'
import axios from 'axios'

export class AddLocation extends React.Component {
    constructor(props){
        super(props)
        this.state={
            description: '',
            image: null,
            tags: [''],
            title: '',
            latitude: '',
            longitude: '',
            author: 'test'
        }
    }

    onDescChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    }

    onTitleChange = (e) => {
        const title = e.target.value
        this.setState(() => ({title}))
    }

    onLatitudeChange = (e)=> {
        const latitude = e.target.value
        this.setState(() => ({latitude}))
    }

    onLongitudeChange = (e) => {
        const longitude = e.target.value
        this.setState(() => ({longitude}))
    }

    onImageChange = (e) => {
        const image = e.target.files[0]
        this.setState(() => ({image}))
    }

    onSubmit = (e) => {
        e.preventDefault()


        const data = new FormData();
        //data.append('image',this.state.image)
        data.append('description',this.state.description)
        data.append('title',this.state.title)
        data.append('tags',this.state.tags)
        data.append('latitude',this.state.latitude)
        data.append('longitude',this.state.longitude)
        data.append('author',this.state.author)
        data.append('visited','true')
        console.log(this.state.description)

        const imageData = new FormData();
        imageData.append('image',this.state.image)

        axios.post('/api/location', {
            file: imageData,
            body: data
        })
        .then( (res) => {
            console.log(res)
        })

    }

    render() {    
        return(
        <div>
        {console.log(this.state.description)}
        <form onSubmit={this.onSubmit}>
            <input
                autoFocus 
                placeholder="title"
                onChange={this.onTitleChange}
             ></input>
            <input 
                placeholder="description"
                onChange={this.onDescChange}
            ></input>
            <input 
                placeholder="latitude"
                onChange={this.onLatitudeChange}
            ></input>
            <input 
                placeholder="longitude"
                onChange={this.onLongitudeChange}
            ></input>
            <input 
                type='file' 
                onChange={this.onImageChange}
            />
            Cliff: <input type="checkbox" name="cliff" vlaue="cliff" />
            Sea: <input type="checkbox" name="sea" vlaue="sea" />
            <button>Submit</button>
        </form>
    </div>
    )
    }
}

export default AddLocation