import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editLocation } from '../../../../redux/locations';
import { removeLocation } from '../../../../redux/locations';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    margin: 20px;
    border: black solid 1px;
    height: 20vh;
`;

const mapStateToProps = (state => {
    return {
        locations: state.locations
    }
})

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                "name": props.name || '',
                "hours": props.hours || '',
                "location": props.location || '',
                "description": props.description || '',
                "image": props.image || ''
            }
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    handleEdit(e) {
        e.preventDefault();
        this.props.editLocation(this.state.inputs, this.props._id)
    }
    handleDelete(e) {
        e.preventDefault();
        this.props.removeLocation(this.props._id)
    }
    
    render() {
        let { name, hours, location, description, image } = this.state.inputs;
        return (
            <Wrapper>
                    <input onChange={this.handleChange} onBlur={this.handleEdit} name="name" value={name}></input>
                    <input onChange={this.handleChange} onBlur={this.handleEdit} name="hours" value={hours}></input>
                    <input onChange={this.handleChange} onBlur={this.handleEdit} name="location" value={location}></input>
                    <input onChange={this.handleChange} onBlur={this.handleEdit} name="description" value={description}></input>
                    <input onChange={this.handleChange} onBlur={this.handleEdit} name="image" value={image}></input>
                    <button onClick={this.handleDelete}>Delete</button>
            </Wrapper>
        )
    }
}

export default connect(mapStateToProps, {editLocation, removeLocation})(Location);