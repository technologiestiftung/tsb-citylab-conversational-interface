import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.span`
  background: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.sizes[2]};
  padding: 10px 25px 15px;
  color: white;
  border-radius: 100px;
  font-size: ${p => p.theme.fontSizes[3]};
  box-shadow: 0 3px 4px 0 rgba(47, 47, 162, 0.2);
  margin: 20px;
  cursor: pointer;
  display: flex;
  transition: opacity .125s ease-in-out;

  &:hover {
    opacity: .9;
    transition: opacity .125s ease-in-out;
  }
`;

export default StyledButton;