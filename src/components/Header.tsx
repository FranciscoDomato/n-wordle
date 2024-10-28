import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
`;

const Title = styled.div`
  font-size: 18px;
  margin-right: 20px;
`;

const Stats = styled.div`
  font-size: 14px;
`;

function Header({
  remaining,
  guesses,
  limit,
  totalWords,
}: {
  remaining: number;
  guesses: number;
  limit: number;
  totalWords: number;
}) {
  return (
    <Container>
      <Title>
        N-wordle por{' '}
        <a href="https://github.com/FranciscoDomato/n-wordle.git" target="_blank">
          Fuego.
        </a>
        {' '}Pero el 99% del trabajo fue hecho por{' '} 
        <a href="https://github.com/jonesnxt/kilordle" target="_blank">
          jones.
        </a>
      </Title>
      <Stats>
      Intentos: {guesses}/{limit} | Adivinadas: {remaining}/{totalWords}
      </Stats>
    </Container>
  );
}

export default Header;
