import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/style';

interface Props {
  children: string;
}

export const Title: FC<Props> = ({ children }) => {
  return <LTitle>{children}</LTitle>;
};

const LTitle = styled.h1`
  color: ${colors.black};
  font-size: 34px;
  line-height: 44px;
`;
