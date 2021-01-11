import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width: ${props=>props.width?props.width:"300px"};
    min-height: ${props=>props.height?props.height:"100px"};
    max-width: ${props=>props.width?props.width:"50%"};
    max-height: ${props=>props.height?props.height:"300px"};
    display: flex;
    flex-direction: column;

    ${props=>props.bgcolor && "background-color:"+props.bgcolor+";"}
    & > span {
        margin: 5px;
    }
`;
const FormInput = styled.input`
    min-height: 25px;
    padding: 5px;
`;
const FormButton = styled.button`
    border-radius: 5px;
    min-height: 25px;
`;
const FormCheckbox = styled.input.attrs({ type: 'checkbox' })``;

//'onFormComplete' & 'onContainerSelect' are Handlers. 
//They are to capture the effects after clicked on the button or container
//The 2 interactions I want to capture is when I click on the container and the button
const Form = ({name, width, height, bgcolor, onFormComplete, onContainerSelect}) => {
    return <Container onClick={()=>{
        onContainerSelect(name)
    }} width={width} height={height} bgcolor={bgcolor}>
        <FormInput type='text' placeholder='name' />
        <FormInput type='password' placeholder='pass' />
        <span>
            <FormCheckbox /> I agree to sell my soul
        </span>
        <span>
            <FormCheckbox /> I agree to sell my life
        </span>
        <span>
            <FormCheckbox /> I agree to give up all of the above
        </span>
        <FormButton onClick={()=>{
            onFormComplete()
        }}>Sign up</FormButton>
    </Container>
}

Form.defaultProps = {
    width: null,
    height: null,
    bgcolor: null,
    //onFormComplete & onContainerSelect by default is gonna be an empty function
    onFormComplete: ()=>{},
    onContainerSelect: ()=>{}
}
export default Form;