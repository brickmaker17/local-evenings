import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    height: 100vh;
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    
`;
const Box = styled.div`
    border: black solid 1px;
    border-radius: 5px;
    opacity: 0.8;
    margin: auto;
    justify-content: center;
    height: 40vh;
    width: 80%;
    background-color: white;
    padding-top: 60px;
    padding-left: 30px;
    padding-right: 30px;
    @media only screen and (max-width: 414px){
        border: black solid 1px;
        border-radius: 5px;
        opacity: 0.8;
        margin: auto;
        justify-content: center;
        height: 60vh;
        width: 80%;
        background-color: white;
        padding-top: 60px;
        padding-left: 30px;
        padding-right: 30px;
    }
    @media only screen and (max-width: 412px){
        border: black solid 1px;
        border-radius: 5px;
        opacity: 0.8;
        margin: auto;
        justify-content: center;
        height: 70vh;
        width: 80%;
        background-color: white;
        padding-top: 60px;
        padding-left: 30px;
        padding-right: 30px;
    }
    @media only screen and (max-width: 360px){
        border: black solid 1px;
        border-radius: 5px;
        opacity: 0.8;
        margin: auto;
        justify-content: center;
        height: 60vh;
        width: 80%;
        background-color: white;
        padding-top: 60px;
        padding-left: 30px;
        padding-right: 30px;
    }
`;

function About(props) {
    return (
        <Wrapper>
            <Box>
                <h1>About Us</h1>
                <br/>
                <p>My name is Luke Barrett, and I created 
                    this site to help people find places that are 
                    local and open late. This could include events, restraunts, bars, 
                    clubs, etc... I hope that you the people will maintain 
                    accuracy of this site information. </p>
                    <br/>
                <p>I hope this site helps you find a fun place to make some great memories with some great friends. If you find a great place remeber to add it to the site so others can find it as well.</p>
            </Box>
        </Wrapper>
    )
}

export default About;