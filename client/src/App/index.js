import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Add from './Add';
import Nav from '../Nav';
import About from '../App/About';
import Search from './Search';
import styled from 'styled-components';
import backImage from './upload/anthony-delanoix-15928.jpg';
import './styles/App.css'

const Wrapper = styled.section`
    height: 100vh;
    width: 100%;
    background-image: url(${backImage});
    background-repeat: no-repeat;
    background-size: 100vw 100%;
    background-position: center;
    overscroll-behavior: contain;
`;

function App(props){
        return (
            <Wrapper>
                <Nav />
                <Switch>
                    <Route path="/home" component={Search} />
                    <Route path="/add" component={Add} />
                    <Route path="/about" component={About} />
                </Switch>
            </Wrapper>
        )
}

export default App;