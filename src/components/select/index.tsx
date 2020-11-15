import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Icons } from '../../assets/icons';
import { colors, margins } from '../../constants/style';
import { ListProps } from '../../typings/select-list-types';

interface Props {
  label: string;
  list: ListProps[];
  value: string | null;
  setValue: (T: string) => void;
}

export const Dropdown: FC<Props> = ({ label, list, value, setValue }) => {
  const [dropped, setDropped] = useState<boolean>(false);
  return (
    <InterfaceBox>
      <Label>{label}</Label>
      <SelectorBox onClick={() => setDropped(!dropped)}>
        <Selector selected={dropped} value={value || list[0].title} disabled />
        <Icons.Dropdown />
        {dropped && (
          <SelectorList>
            {list.map(({ id, title }) => {
              return (
                <Item key={id} onClick={() => setValue(title)}>
                  <ItemTitle>{title}</ItemTitle>
                </Item>
              );
            })}
          </SelectorList>
        )}
      </SelectorBox>
    </InterfaceBox>
  );
};

const InterfaceBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: ${margins.s} 0;
`;

const SelectorBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    right: 21px;
  }
`;

interface StyleProps {
  selected: boolean;
}
const Selector = styled.input<StyleProps>`
  width: 100%;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  border: 1px solid #dbe2ea;
  margin: 8px 0;
  border-color: ${props => (props.selected ? '#0880ae' : '#dbe2ea')};

  &:disabled {
    outline: none;
    background: #fff;
  }
`;

const Label = styled.span`
  color: ${colors.label};
  line-height: 22px;
`;

const SelectorList = styled.div`
  width: 100%;
  padding: 11px 0;
  position: absolute;
  background: #fff;
  border: 1px solid #dbe2ea;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04),
    0px 20px 20px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  top: 61px;
  z-index: 99;
`;

const Item = styled.div`
  width: 100%;
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background: #ebf4f8;
  }
`;

const ItemTitle = styled.span`
  color: #756f86;
  font-weight: 400;
  line-height: 20px;
`;
