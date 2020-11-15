import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

export const Container: FC<Props> = ({ children }) => {
  return <LContainer>{children}</LContainer>;
};

const LContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
