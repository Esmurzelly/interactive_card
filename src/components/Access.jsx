import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--white-color);
    color: black;
    padding: 0 25px 30px 25px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h3, h2, p {
        text-transform: uppercase;
        margin-bottom: 10px;
        color: #000;
    }
    .error {
        color: red;
        font-size: 10px;
    }
    gap: 25px;
    
`;

const Button = styled.button`
    width: 100%;
    background-color: var(--very-dark-violet-color);
    color: var(--white-color);
    text-align: center;
    padding: 17px 0;
    border: none;
    border-radius: 10px;
    font-size: var(--fs);
`;

const Access = ({children}) => {
    return ( 
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
     );
}
 
export default Access;