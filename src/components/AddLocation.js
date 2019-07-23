import React from 'react'
import { connect } from 'react-redux';
import {addLocation} from '../actions/locations'

export class AddLocation extends React.Component {
    constructor(props){
        super(props)
        this.state={
            description: '',
            imageName: '',
            tags: [''],
            title: '',
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

    onImageChange = (e) => {
        const image = e.target.value
        this.setState(() => ({imageName: image}))
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit({
            description: this.state.description,
            title: this.state.title,
            visited: true,
            tags: this.state.tags,
            imageName: this.state.imageName
        })
        this.props.history.push('/')
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
                placeholder="image"
                onChange={this.onImageChange}
            ></input>
            Cliff: <input type="checkbox" name="cliff" vlaue="cliff" />
            Sea: <input type="checkbox" name="sea" vlaue="sea" />
            <button>Submit</button>
        </form>
    </div>
    )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (location) => dispatch(addLocation(location))
})

export default connect(undefined, mapDispatchToProps)(AddLocation)