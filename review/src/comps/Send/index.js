import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width: ${props => props.width ? props.width : "300px"};
    min-height: ${props => props.height ? props.height : "100px"};
    max-width: ${props => props.width ? props.width : "50%"};
    max-height: ${props => props.height ? props.height : "300px"};
    padding: 10px;
    display: flex;
    flex-direction: column;
`;
const FormInput = styled.input`
    min-height: 25px;
    padding: 5px;
`;
const FormButton = styled.button`
    border-radius: 5px;
    min-height: 50px;
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
        }}>Send Info</FormButton>
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