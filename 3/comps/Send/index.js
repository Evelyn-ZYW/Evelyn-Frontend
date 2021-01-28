import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width: ${props => props.width ? props.width : "200px"};
    min-height: ${props => props.height ? props.height : "100px"};
    max-width: ${props => props.width ? props.width : "35%"};
    max-height: ${props => props.height ? props.height : "300px"};
    padding: 10px;
    display: flex;
    flex-direction: column;
`;
const FormInput = styled.input`
    min-height: 25px;
    padding: 5px;
    margin: 0 0 10px 0;
    border-radius: 5px;
    border: 1px solid pink;
`;
const FormButton = styled.button`
    border-radius: 5px;
    min-height: 50px;
    border: none;
    color: white;
    background-color: pink;
    &:hover {
        box-shadow: 2px 2px 3px #888888;
        cursor: pointer;
    }
`;

const Send = ({ onFormComplete }) => {

    const [exercise, setExercise] = useState("");
    const [reps, setReps] = useState("");
    const [cal, setCal] = useState("");

    return <Container>
        <FormInput type='text' placeholder='name' onChange={(e) => { setExercise(e.target.value) }} />
        <FormInput type='text' placeholder='reps' onChange={(e) => { setReps(e.target.value) }} />
        <FormInput type='text' placeholder='calories' onChange={(e) => { setCal(e.target.value) }} />
        <FormButton onClick={() => {
            onFormComplete(exercise, reps, cal)
        }}>Post</FormButton>
    </Container>
}

Send.defaultProps = {
    width: null,
    height: null,
    bgcolor: null,
    onFormComplete: () => { },
    onContainerSelect: () => { }
}
export default Send;