import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 10px;
    padding: 10px;
    ${props => props.highlight && "background-color: #FAD;"}
    //if there is a highlight prop, use background #FAD
`;

const Items = ({ id, username, message, created, onClick, highlight }) => {
    return <Container onClick={() => onClick(id)}
        highlight={highlight}
    >
        <div><b>{id}</b> : {username} - {message} - {created}</div>
    </Container>
}

Items.defaultProps = {
    id: null,
    username: null,
    message: null,
    created: null,
    highlight: null,
    onClick: () => { }
}

export default Items;

