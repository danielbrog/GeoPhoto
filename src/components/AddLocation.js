import React from 'react'

export class AddLocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            image: null,
            tags: ['','',''],
            title: '',
            latitude: '',
            longitude: '',
            author: 'test',
            errors: {}
        }
    }

    onDescChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onTitleChange = (e) => {
        const title = e.target.value
        this.setState(() => ({ title }))
    }

    onLatitudeChange = (e) => {
        const latitude = e.target.value
        this.setState(() => ({ latitude }))
    }

    onLongitudeChange = (e) => {
        const longitude = e.target.value
        this.setState(() => ({ longitude }))
    }

    onImageChange = (e) => {
        const image = e.target.files[0]
        this.setState(() => ({ image }))
    }


    onSubmit = (e) => {
        e.preventDefault()

        if (this.state.errors.image){
            this.setState(() => ({errors: Object.assign({test:'test'},this.state.errors)}))
            console.log(this.state.errors)
        }
        else if (this.state.image == null) {
            this.setState(() => ({errors: Object.assign({image:'Please choose an image file'},this.state.errors)}))
            console.log(this.state.errors)
        } 
        
        else {
            const data = new FormData();

            data.append('description', this.state.description)
            data.append('title', this.state.title)
            data.append('tags', this.state.tags)
            data.append('author', this.state.author)
            data.append('visited', 'true')
            data.append('image', this.state.image)

            const coordinates = this.state.latitude + ', ' + this.state.latitude

            data.append('coordinates', coordinates)

            fetch('/api/location', {
                method: 'post',
                body: data
            }).then((response) => {
                response.json().then((data) => {
                    if (data.status == 500) {
                        errorInfo.textContent = "There was an error updating the image"
                    } else {
                        this.props.history.push('/GeoPhoto')
                    }
                })
            })
        }
    }
    /*
    onSubmit = (e) => {
        e.preventDefault()

        const data = new FormData();

        data.append('description',this.state.description)
        data.append('title',this.state.title)
        data.append('tags',this.state.tags)
        data.append('latitude',this.state.latitude)
        data.append('longitude',this.state.longitude)
        data.append('author',this.state.author)
        data.append('visited','true')
        data.append('image','hello')

        axiom
    }
*/
    render() {
        return (
            <div className="AddLocation">

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
                    <input 
                        placeholder="Tag 1"
                        onChange={this.ontagChange}/>
                    <input 
                        placeholder="Tag 2"
                        onChange={this.ontagChange}/>
                    <input 
                        placeholder="Tag 3"
                        onChange={this.ontagChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddLocation