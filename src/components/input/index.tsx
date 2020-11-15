import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, margins } from '../../constants/style';
import { validate } from '../../lib/validate';

interface Props {
  change: (T: string) => void;
  placeholder?: string;
  label: string;
  value: string;
  error: string;
  name: string;
  valid: boolean;
}

export const Input: FC<Props> = ({
  change,
  placeholder,
  label,
  value,
  error,
  name,
  valid,
}) => {
  const err = new validate();

  return (
    <InterfaceBox>
      <Label>{label}</Label>
      <LInput
        placeholder={placeholder}
        onChange={e => change(e.target.value)}
        value={value}
        name={name}
        onKeyDown={() => err.valid(value, name)}
      />
      <ErrorMessage>{!valid && error}</ErrorMessage>
    </InterfaceBox>
  );
};

const InterfaceBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: ${margins.s} 0;
`;

const Label = styled.span`
  color: ${colors.label};
  line-height: 22px;
`;

const LInput = styled.input`
  width: 100%;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border: 1px solid #dbe2ea;
  border-radius: 6px;
  outline: none;
  margin: ${margins.s} 0;
  font-weight: 400;
  font-family: 'Ibm';

  &::placeholder {
    font-size: 16px;
    line-height: 21px;
    color: #7c9cbf;
  }

  &:focus {
    border-color: #0880ae;
  }
`;

const ErrorMessage = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.error};
`;
