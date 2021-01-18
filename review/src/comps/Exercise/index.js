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

const Exercise = ({ id, name, reps, cal, timestamp }) => {
  return <Container>
    <Subject>exercise</Subject>
    <Row>
      <b>id</b>
      <span>{id}</span>
    </Row>
    <Row>
      name
      <span>{name}</span>
    </Row>
    <Row>
      reps
      <span>{reps}</span>
    </Row>
    <Row>
      calories
      <span>{cal}</span>
    </Row>
    <Row>
      created
    <span>{timestamp}</span>
    </Row>

  </Container>
}

Exercise.defaultProps = {

}

export default Exercise;