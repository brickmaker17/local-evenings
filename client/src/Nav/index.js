import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: grid;
    position: fixed;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    height: 30px;
    background: gray;
    opacity: 0.7;
    z-index: 1;
`;
const StyledLink = styled(Link)`
    color: black;
    :hover {
        border-radius: 5px;
        background-color: #555;
        color: white;
    }
    margin: 5px;
    text-decoration: none;
    text-align: center;
    
`;


function Nav(props){
    return(
        <Wrapper>
            <StyledLink to="/home">Home</StyledLink>
            <StyledLink to="/add">Add</StyledLink>
            <StyledLink to="/about">About</StyledLink>
        </Wrapper>
    )
}

export default Nav;