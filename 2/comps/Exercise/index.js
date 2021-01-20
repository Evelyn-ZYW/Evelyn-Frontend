import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-width: 400px;
  max-width: 500px;
  min-height: 500px;
  max-height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
`;

const Subject = styled.div`
  background-color: blue;
  color: white;
  min-height: 50px;
  min-width: 100%;
  display: flex;
  align-items: center;
  font-size: 24pt;
  position: absolute;
  top: -30px;
`;

const Row = styled.div`
  // border: 1px solid grey;
  min-height: 50px;
  display: flex;
  align-items: center;
  font-size: 24pt;
`;

const Exercise = ({ info }) => {
  return <Container>
    <Subject>exercise</Subject>
    <Row>
      <b>id</b>
      {info.map((o) => <span>{ o.id }</span>)}
    </Row>
    <Row>
      name
     {info.map((o) =>  <span>{ o.name }</span>)}
    </Row>
    <Row>
      reps
      {info.map((o) => <span>{ o.reps }</span>)}
    </Row>
    <Row>
      calories
      {info.map((o) => <span>{ o.calories }</span>)}
    </Row>
    <Row>
      created
    {info.map((o) => <span>{ o.created }</span>)}
    </Row>
  </Container>
}

Exercise.defaultProps = {

}

export default Exercise;