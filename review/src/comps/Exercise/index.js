import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-width: 200px;
  max-width: 300px;
  min-height: 200px;
  max-height: 300px;
  border: 1px solid pink;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  margin: 10px;
  padding: 10px;
`;

const Subject = styled.div`
  color: white;
  min-height: 50px;
  min-width: 100%;
  display: flex;
  align-items: center;
`;

const Row = styled.div`
  // border: 1px solid grey;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Exercise = ({ name, reps, cal }) => {
  return <Container>
    <Row>
      Name:
      <span>{name}</span>
    </Row>
    <Row>
      Reps:
      <span>{reps}</span>
    </Row>
    <Row>
      Calories:
      <span>{cal}</span>
    </Row>
  </Container>
}

Exercise.defaultProps = {

}

export default Exercise;