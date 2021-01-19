import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;

`;
// const IdCont = styled.div`

// `;
const MsgCont = styled.div`
border: 5px solid white;
background-color: white;
border-radius: 10px;
padding: 10px;
display: flex;
flex-direction: column;
margin: 10px 0 10px 0;
`;
const ItemCont = styled.div`
display: flex;
justify-content: space-between;

`;
const Content = styled.span`
justify-content: flex-end;
`;
const fakedb = [
  {
    id: 1,
    username: "fake",
    message: "fake stuff",
    created: "Dec. 1st, 1999"
  }
]

const Messages = ({ msgs }) => {
  return <Container>

    {msgs.map(o => <MsgCont>
      <ItemCont>
        <span>ID:</span>
        <Content>{o.id}</Content>
        </ItemCont>
      <ItemCont>
        <span>Username:</span>
        <Content>{o.username}</Content>
      </ItemCont>
      <ItemCont>
        <span>Message:</span>
        <Content>{o.message}</Content>
        </ItemCont>
      <ItemCont>
        <span>Created:</span>
        <Content>{o.created}</Content>
        </ItemCont>
    </MsgCont>)}

  </Container>
}

Messages.defaultProps = {
  msgs: fakedb
}
export default Messages;