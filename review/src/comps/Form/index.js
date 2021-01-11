import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width: ${props=>props.width?props.width:"300px"};
    min-height: ${props=>props.height?props.height:"100px"};
    max-width: ${props=>props.width?props.width:"50%"};
    max-height: ${props=>props.height?props.height:"300px"};
    padding: 10px;
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

    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false);

    return <Container onClick={()=>{
        onContainerSelect(name)
    }} width={width} height={height} bgcolor={bgcolor}>
        <FormInput type='text' placeholder='name' onChange={(e)=>{setUsername(e.target.value)}}/>
        <FormInput type='password' placeholder='pass' onChange={(e)=>{setPass(e.target.value)}}/>
        <span>
            <FormCheckbox onChange={(e)=>{setCheck1(e.target.checked)}}/> I agree to sell my soul
        </span>
        <span>
            <FormCheckbox onChange={(e)=>{setCheck2(e.target.checked)}}/> I agree to sell my life
        </span>
        <span>
            <FormCheckbox onChange={(e)=>{setCheck3(e.target.checked)}}/> I agree to give up all of the above
        </span>
        <FormButton onClick={()=>{
            onFormComplete(username, pass, check1, check2, check3)
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