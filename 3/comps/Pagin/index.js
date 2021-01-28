import React, { useState } from 'react';
import styled from 'styled-components';

const PageButton = styled.button`
    background-color:${props => props.bgcolor ? props.bgcolor : "pink"};
`;


const Pagin = ({ onClickPage, numpages }) => {
    var pages = [];
    const [pageon, setPageOn] = useState(1);

    /*
    In here the handler function is in the component, but we still have a handler function on the page - ChangePage()
    This captures both states:
    1. the handler that is pass back out to the page
    2. the state that you are in right now - the page that you are in
    */
    const HandleClick = (num) => {
        onClickPage(num)
        setPageOn(num)
    }

    for (var i = 0; i < numpages; i++) {
        pages.push(
            <PageButton
                bgcolor={pageon === i + 1 ? "#ADD" : "pink"}
                onClick={HandleClick.bind(this, i + 1)}>{i + 1}
            </PageButton>
        );
    }

    return <div>
        {pages}
    </div>
}

Pagin.defaultProps = {
    onClickPage: () => { },
    numpages: 1
}

export default Pagin;

/*
[1] [2] [3]
*/