import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/button';
import { Checkbox } from '../../components/checkbox';
import { Input } from '../../components/input';
import { Link } from '../../components/link';
import { Dropdown } from '../../components/select';
import { Subtitle } from '../../components/subtitle';
import { Title } from '../../components/title';
import { margins, paddings } from '../../constants/style';
import { emailError, nameError, phoneError } from '../../models/form-errors';
import { languages } from './mock';

export const Form = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setMail] = useState<string>('');
  const [language, setLanguage] = useState<string>(languages[0].title);
  const [policy, setPolicy] = useState<boolean>(false);

  const success =
    name.length > 1 &&
    phone.length > 1 &&
    email.length > 1 &&
    policy &&
    emailError &&
    phoneError &&
    nameError;

  return (
    <FormBox>
      <Title>Регистрация</Title>
      <SubBox>
        <Subtitle>Уже есть аккаунт?</Subtitle>
        <Link to="#" title="Войти" />
      </SubBox>

      <Content>
        <Input
          placeholder="Введите Ваше имя"
          label="Имя"
          change={setName}
          error="Введено не корректное значение"
          name="name"
          value={name}
          valid={nameError}
        />

        <Input
          placeholder="Введите ваш email"
          label="Email"
          change={setMail}
          error="Введено не корректное значение"
          name="email"
          value={email}
          valid={emailError}
        />

        <Input
          placeholder="Введите ваш номер телефона"
          label="Номер телефона"
          change={setPhone}
          error="Введено не корректное значение"
          name="phone"
          value={phone}
          valid={phoneError}
        />

        <Dropdown
          label="Язык"
          list={languages}
          value={language}
          setValue={setLanguage}
        />

        <Policy>
          <Checkbox change={setPolicy} checked={policy} />
          <AcceptTitle>
            Принимаю <Line>условия</Line> использования
          </AcceptTitle>
        </Policy>
      </Content>

      <SendInterface>
        <Button
          disabled={!success}
          click={() => alert('You know nothing, Jon Snow!')}
        >
          Зарегистрироваться
        </Button>
      </SendInterface>
    </FormBox>
  );
};

const FormBox = styled.div`
  width: 460px;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02),
    0px 32px 64px rgba(44, 39, 56, 0.04);
  padding: ${paddings.s};
  background: #fff;
  border-radius: 24px;
`;

const SubBox = styled.div`
  width: 100%;
  display: flex;
  margin: ${margins.s} 0;
  align-items: center;

  a {
    margin-left: ${margins.s};
  }
`;

const Content = styled.div`
  width: 100%;
  margin-top: 58px;
`;

const SendInterface = styled.div`
  width: 100%;
`;

const Policy = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  margin: 34px 0;
`;

const AcceptTitle = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #756f86;
  margin-left: ${margins.s};
`;

const Line = styled.span`
  color: #0880ae;
`;
