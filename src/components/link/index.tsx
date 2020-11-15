import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  to: string;
  title: string;
}

export const Link: FC<Props> = ({ to, title }) => {
  return <SLink href={to}>{title}</SLink>;
};

const SLink = styled.a``;
