import React, { Component } from 'react';
import Location from "./Location";
import { connect } from 'react-redux';
import { getLocations } from '../../../redux/locations';
import styled from 'styled-components';

const Wrapper = styled.div`
display: grid;
border: black solid 1px;
border-radius: 5px;
opacity: 0.8;
margin: auto;
height: 40vh;
width: 80%;
background-color: white;
    
    @media only screen and (min-width: 817px){
        display: flex
        border: black solid 1px;
        border-radius: 5px;
        opacity: 0.8;
        margin: auto;
        height: 20vh;
        width: 80%;
        background-color: white;
    }
    @media only screen and (max-height: 670px){
        display: flex
        border: black solid 1px;
        border-radius: 5px;
        opacity: 0.8;
        margin: auto;
        height: 30vh;
        width: 80%;
        background-color: white;
    }
    
`;
const Title = styled.h1`
    font-size: 100px;
    @media only screen and (max-width: 414px){
        font-size: 64px;
    }
    @media only screen and (max-width: 375px){
        font-size: 64px;
    }
    @media only screen and (max-width: 360px){
        font-size: 64px;
        
    }
`;

const Wrapper1 = styled.div`
    display: grid;
    overflow: scroll;
    height: 40vh;
    
`;



class List extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (this.props.search !== nextProps.search) {
            this.props.getLocations()
        }
    }

    // componentDidMount() {
    //     this.props.getLocations()
    // }

    render() {
        // let {name, hours, location, description, image} = this.state.inputs;
        let { loading, data, search } = this.props;
        const locations = data
            .filter(location => {
                return location.name.toLowerCase().includes(search) || location.description.toLowerCase().includes(search);
                //return the location object if it matches the search term
            })
            .map(location => {
                return <Location key={location._id} {...location} />
            })
        return (
            search ?
                <Wrapper1>
                    {locations}
                </Wrapper1>
                :
                <Wrapper>
                    <Title>Local Evenings</Title><p>Search for Name of place</p>
                </Wrapper>
        )
    }
}

const mapStateToProps = (state => {
    return state.locations
})

export default connect(mapStateToProps, { getLocations })(List)