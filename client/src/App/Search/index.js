import React, { Component } from 'react';
import List from '../Search/List/';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    text-align: center;
    height: 100vh;
`;

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    
`;
const StyledInput = styled.input`
    height: 30px;
    width: 200px;
    border-radius: 5px;
`;

class Search extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                search: ""
            }
        }
    }
    handleSearch = (e) => {
        let { value } = e.target;
        this.setState({
            inputs: {
                search: value
            }
        })
        
    }
    render() {
        let { search } = this.state.inputs;
        return (
            <Wrapper>
                <StyledForm>
                    <StyledInput 
                        value={search} 
                        name="search" 
                        type="text" 
                        placeholder="Search Event name or description..." 
                        onChange={this.handleSearch} 
                    />
                </StyledForm>
                <List search={search} />
            </Wrapper>
        )
    }
}

export default Search;