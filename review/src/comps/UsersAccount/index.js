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
    // border: red solid 1px;
    background-color: #FFFFFF;
    position: relative;
`;
const Tabs = styled.span`
position: absolute;
top: 5px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const OptionButton = styled.button`
    min-width: 112px;
    min-height: 55px;
    border-radius: 5px 5px 0 0;
    border: 1px solid black;
    border-bottom: none;
    margin-right:10px;
    
    ${props => props.bgcolor && "background-color:" + props.bgcolor + ";"}
`;
const OneInput = styled.div`
    padding-top: 10px;
    // border: red solid 1px;
`;
const OneInput1 = styled.div`
    padding-top: 10px;
    display: ${props => props.display ? props.display : "block"};
`;
const FormInput = styled.input`
    background: #F2F4FB;
    min-width: 390px;
    min-height: 45px;
    border: none;
    border-radius: 5px;
    margin: 10px 0 10px 0;
`;
const FormButton = styled.button`
    max-width: 100%;
    max-height: 100px;
    min-width: 382px;
    min-height: 46px;
    background: #4285F4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    margin-top: 40px;
    color: #FFF;
    position: absolute;
    bottom: 10px;
`;

const UsersAccount = ({ bgcolor1, bgcolor2, text, display, onTabSelect, onRegister, onLogin, }) => {

    const [register, setRegister] = useState(false);
    const [login, setLogin] = useState(true);



    return <Container>
        <Tabs>
            <OptionButton onClick={() => {
                // onTabSelect();
                onRegister();
                setRegister(false);
            }} bgcolor={bgcolor1}>Register</OptionButton>

            <OptionButton onClick={() => {
                // onTabSelect();
                onLogin();
                setLogin(false);
            }} bgcolor={bgcolor2}>Login</OptionButton>
        </Tabs>
        <br />
        <Body>
            <OneInput>
                EMAIL
            <FormInput type="text" placeholder="     joe@gmail.com" />
            </OneInput>
            <OneInput>
                PASSWORD
            <FormInput type="password" placeholder="     password" />
            </OneInput>
            <OneInput1 display={display}>
                CONFIRM PASSWORD
            <FormInput type="password" placeholder="     confirm password" />
            </OneInput1>
        </Body>
        <FormButton>{text}</FormButton>
    </Container>
}
UsersAccount.defaultProps = {
    onRegister: () => { },
    onLogin: () => { },
    onTabSelect: () => { }
}
export default UsersAccount;