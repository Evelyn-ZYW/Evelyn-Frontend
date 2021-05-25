import React, {useState} from 'react';
import styled from 'styled-components';

const Button = styled.button`
    min-width: 5rem;
    max-width: 5rem;
    min-height: 3rem;
    nax-height: 3rem;
    background: linear-gradient(rgb(62, 170, 240), rgb(5, 127, 206));
    border-radius: 4px;
    border: none;
    box-shadow: rgb(153 155 162 / 15%) 0px 1px 3px;
    transition: 0.2s;
    color: #FFF;

    :hover {
        background: linear-gradient(rgb(5, 127, 206), rgb(5, 107, 174));
        transition: 0.2s;
    }
`;

const Interview = () => {

    const [num, setNum] = useState(0)
    const handleCounter = () => {
        setNum(num+1);
    }
    return <div>
        <Button onClick={handleCounter}>
            Click me
        </Button>
        <div>
            Number: {num}
        </div>
    </div>
}
export default Interview;
