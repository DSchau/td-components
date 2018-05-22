import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.button`
  background-color: #50b948;
  color: white;

  outline: none;
  border: 2px solid transparent;
  border-radius: 30px;

  padding: 1rem;
  cursor: pointer;

  :hover {
    color: #50b948;
    background-color: white;
    border-color: #50b948;
  }

  ${props => props.inverted && css`
    background-color: transparent;
    color: #50b948;
    border-color: #50b948;
    :hover {
      background-color: #50b948;
      color: white;
    }
  `}
`;

export function Button({ inverted, ...rest }) {
  return (
    <Container inverted={inverted} {...rest}>Click me</Container>
  );
}
