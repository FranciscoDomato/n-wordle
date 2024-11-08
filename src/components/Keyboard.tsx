import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  padding: 12px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Key = styled.div<{ letter: string; used: boolean }>`
  width: ${({ letter }) => (letter === '+' ? '55px' : '40px')};
  height: 40px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  :hover {
    background-color: #eee;
  }

  ${({ used }) => used && 'background-color: #CCC;'}
`;

const rows = ['qwertyuiop', 'asdfghjklñ', '+zxcvbnm-'];

function Keyboard({
  expired,
  usedLetters,
  onKeyPress,
  wordlist,
}: {
  expired: boolean;
  usedLetters: string[];
  onKeyPress: (key: string) => void;
  wordlist: string[];
}) {
  if (expired) {
    return (
      <Container>
        <Content>Las palabras que te faltaron eran: {'"' + wordlist.join('", "') + '"'}. Más suerte la próxima 😬​</Content>
      </Container>
    );
  } else {
    return (
      <Container>
        <Content>
          {rows.map((row) => (
            <Row key={row}>
              {row.split('').map((letter) => (
                <Key
                  key={letter}
                  letter={letter}
                  onClick={() => onKeyPress(letter)}
                  used={usedLetters.indexOf(letter) !== -1}
                >
                  {letter === '+' ? 'GO' : letter === '-' ? '⌫' : letter}
                </Key>
              ))}
            </Row>
          ))}
        </Content>
      </Container>
    );
  }
}

export default Keyboard;
