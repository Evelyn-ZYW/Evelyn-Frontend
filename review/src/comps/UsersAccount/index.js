import React, { useState } from 'react';

import styled from 'styled-components';

const Container = styled.div`
    min-width:300px;
    min-height: 450px;
    max-width: 390px;
    max-height: 600px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #F3F7FB;
    position: relative;
`;
const Tabs = styled.span`
    position: absolute;
    top: 10px;
    max-width: 100%;
    min-width: 65%;
    display: flex;
    justify-content: center;
    // border: 1px solid red;
    overflow: hidden;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 390px;
    max-width: 390px;
`;
const OptionButton = styled.button`
    min-width: 112px;
    min-height: 55px;
    border-radius: 5px 5px 0 0;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
    border-bottom: none;
    margin-right:10px;
    outline: none;
    
    ${props => props.bgcolor && "background-color:" + props.bgcolor + ";"}
`;
const Input = styled.div`
    padding-top: 10px;
    max-width: 100%;
    min-width: 100%;
    display: ${props => props.display ? props.display : "flex"};
    flex-direction: column;
`;

const FormInput = styled.input`
    background: #FFFFFF;
    max-width: 100%;
    min-width: 95%;
    min-height: 45px;
    max-height: 45px;
    border: none;
    border-radius: 5px;
    margin: 10px 0 10px 0;
    padding: 0px 3%;
`;
const FormButton = styled.button`
    max-width: 100%;
    max-height: 100px;
    min-width: 390px;
    min-height: 46px;
    background: #4285F4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 5px;
    margin-top: 40px;
    color: #FFF;
    position: absolute;
    bottom: 10px;
    &:hover {
    background: #003AF0;
    cursor: pointer;
    }
`;

const UsersAccount = ({ bgcolor1, bgcolor2, text, display, onRegister, onLogin }) => {

    return <Container>
        <Tabs>
            <OptionButton onClick={() => {
                onRegister();
            }} bgcolor={bgcolor1}>Register</OptionButton>

            <OptionButton onClick={() => {
                onLogin();
            }} bgcolor={bgcolor2}>Login</OptionButton>
        </Tabs>
        <br />
        <Body>
            <Input>
                EMAIL
                <FormInput type="text" placeholder="joe@gmail.com" />
            </Input>
            <Input>
                PASSWORD
                <FormInput type="password" placeholder="password" />
            </Input>
            <Input display={display}>
                CONFIRM PASSWORD
                <FormInput type="password" placeholder="confirm password" />
            </Input>
        </Body>
        <FormButton>{text}</FormButton>
    </Container>
}
UsersAccount.defaultProps = {
    onRegister: () => { },
    onLogin: () => { },
}
export default UsersAccount;