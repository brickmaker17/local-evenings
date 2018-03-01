import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLocation } from '../../redux/locations';
import styled from 'styled-components';

const Wrapper = styled.div`
    
    padding-top: 200px;
    
`;

const Carlos = styled.div`
    display: flex;
    flex-direction: column;
    border: black solid 1px;
    border-radius: 5px;
    opacity: 0.8;
    margin: auto;
    height: 350px;
    width: 200px;
    background-color: white;
`;
const Description = styled.textarea`
    height: 100px;
`;


const mapStateToProps = (state => {
    return {
        locations: state.locations
    }
})

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                "name": '',
                "hours": '',
                "location": '',
                "description": '',
                "image": ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addLocation(this.state.inputs)
        this.clearInputs()
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


    clearInputs() {
        this.setState(() => {
            return {
                inputs: {
                    "name": '',
                    "hours": '',
                    "location": '',
                    "description": '',
                    "image": ''
                }
            }
        })
    }

    render() {
        let { name, hours, location, description, image } = this.state.inputs;
        console.log(this.state.inputs)
        return (
            <div>
                <Wrapper>
                    <Carlos>
                    <h1>Add a Business</h1>
                    <form onSubmit={this.handleSubmit}>
                        <p>Name:</p>
                        <input onChange={this.handleChange} value={name} name="name" type="text" placeholder="The Complex" />
                        <p>Closing Hours:</p>
                        <input onChange={this.handleChange} value={hours} name="hours" type="text" placeholder="12:00AM" />
                        <p>Address:</p>
                        <input onChange={this.handleChange} value={location} name="location" type="text" placeholder="123 Fake Stree" />
                        <p>Description</p>
                        <Description onChange={this.handleChange} value={description} name="description" type="text" placeholder="Fun place, great for a party..." />
                        <p>Image Upload:</p>
                        <input name="image" type="file" />
                        <button>Submit</button>
                    </form>
                    </Carlos>
                </Wrapper>
            </div>
        )
    }
}
export default connect(mapStateToProps, { addLocation })(Add);