import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  change: (T: boolean) => void;
  defaultChecked?: boolean;
  checked: boolean;
  name?: string;
  readOnly?: boolean;
}

export const Checkbox: FC<Props> = ({
  change,
  checked,
  defaultChecked,
  name,
}) => {
  return (
    <Label>
      <Input
        type="checkbox"
        name={name}
        onChange={e => change(e.target.checked)}
        checked={checked}
        defaultChecked={defaultChecked}
      />
      <CheckMark />
    </Label>
  );
};

const Input = styled.input``;

const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  border: 2px solid #0880ae;
  border-radius: 4px;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 22px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 24px;
  height: 24px;

  ${Input} {
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    border: 2px solid #ccc5c4;
    border-radius: 4px;
  }

  &:hover ${Input} ~ ${CheckMark} {
    background-color: #dbe2ea;
  }

  ${Input}:checked ~ ${CheckMark} {
    background-color: #fff;
  }

  ${Input}:checked ~ ${CheckMark}:after {
    display: block;
  }

  ${CheckMark}:after {
    left: 7px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid #0880ae;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
