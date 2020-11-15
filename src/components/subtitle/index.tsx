import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/style';

interface Props {
  children: string;
}

export const Subtitle: FC<Props> = ({ children }) => {
  return <LSubtitle>{children}</LSubtitle>;
};

const LSubtitle = styled.span`
  color: ${colors.black};
  line-height: 22px;
  font-weight: 400;
`;
