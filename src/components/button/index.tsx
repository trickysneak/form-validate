import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  disabled?: boolean;
  click: () => void;
}

export const Button: FC<Props> = ({ children, disabled, click }) => {
  return (
    <LButton disabled={disabled} onClick={click}>
      {children}
    </LButton>
  );
};

const LButton = styled.button`
  font-family: 'Ibm';
  width: 100%;
  padding: 18px;
  display: flex;
  align-item: center;
  justify-content: center;
  background: #0880ae;
  font-weight: 500;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
    0px 4px 8px rgba(44, 39, 56, 0.08);

  &:hover {
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08),
      0px 24px 48px rgba(44, 39, 56, 0.16);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0pt 2pt rgba(44, 39, 56, 0.86);
    background: #0880ae;
  }

  &:disabled {
    background: #dbe2ea;
    color: #b1b5bf;
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
      0px 4px 8px rgba(44, 39, 56, 0.08);
  }
`;
